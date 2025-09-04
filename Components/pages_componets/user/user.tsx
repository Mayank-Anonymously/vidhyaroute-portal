import React, { useEffect, useMemo, useState } from "react";
import { Table, Card, Col, FormControl,Button, Modal,Form  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { GetAllUser } from "Components/slices/user/thunk";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import Link from "next/link";
import { UPDATE_USER_WALLET, baseURL } from "Components/helpers/url_helper";

const User = () => {
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState(""); // State for search input
  const [userId,setUserId] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    paymentAmount: ''
  });

  const data = useSelector((state: any) => state.user.userdata || []);

  useEffect(() => {
    dispatch(GetAllUser());
  }, [dispatch]);

  // Columns definition
  const columns = useMemo(
    () => [
      { Header: "Customer Name", accessor: "user.name" },
      { Header: "Email", accessor: "user.email" },
      { Header: "Mobile", accessor: "user.mobile" },
      { Header: "Wallet Amount", accessor: "walletAmount" },
      { Header: "Wallet Update", accessor: "walletUpdate" },
      { Header: "Vacations", accessor: "Vacations" },
      { Header: "Manual Recharges", accessor: "manualrecharges" },
      { Header: "DOB", accessor: "dob" },
      { Header: "Membership", accessor: "membership" },
      { Header: "Orders", accessor: "orders" },
      { Header: "Created Date", accessor: "createdDate" },
    ],
    []
  );

  // Filter the data based on search input
  const filteredData = data.filter((row: any) => {
    const customerName = row?.name?.toLowerCase() || "";
    const email = row?.email?.toLowerCase() || "";
    const mobile = String(row?.contact || "").toLowerCase();
    const walletBalance = row?.walletBalance?.toString() || "";
    const dob = row?.dob?.toString() || "";
    const membership = row?.membership_active ? "Active" : "Deactive";
    const orders = row?.orders.length.toString() || "";
    const createdDate = moment(row?.createdAt).format("Do MMM YY").toLowerCase();

    return (
      customerName.includes(search.toLowerCase()) ||
      email.includes(search.toLowerCase()) ||
      mobile.includes(search.toLowerCase()) ||
      walletBalance.includes(search.toLowerCase()) ||
      dob.includes(search.toLowerCase()) ||
      membership.toLowerCase().includes(search.toLowerCase()) ||
      orders.includes(search.toLowerCase()) ||
      createdDate.includes(search.toLowerCase())
    );
  });
  const handleShowModal = (user_id:any) => {
    setUserId(user_id);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({
      paymentAmount: ''
    });
    setUserId("");
  };

  const handleInputChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (!formData.paymentAmount) {
      Swal.fire({
        title: "error",
        text: "Payment Amount are required.",
        icon: "error",
      });
    }
    try {
      const options = {
        url: `${baseURL}${UPDATE_USER_WALLET}${userId}`,
        method: "POST",
        data: formData
      };
      const fetchapi = await axios.request(options);
      const resp: any = await fetchapi;
      const { response, baseResponse } = resp;
      console.log(baseResponse)
      if(baseResponse.status==1)
      {
        Swal.fire({
          title: "Success",
          text: baseResponse.message,
          icon: "success",
        });
        handleCloseModal(); 
        setFormData({
          paymentAmount: ''
        });
        setUserId("");
      }
      else{
        Swal.fire({
          title: "error",
          text: baseResponse.message,
          icon: "error",
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Col xl={12}>
      <Card>
        <Card.Header>
          <h4 className="card-title mb-0">All Users</h4>
        </Card.Header>
        <Card.Body>
          {/* Search Input */}
          <FormControl
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="mb-3"
          />
          <Table striped bordered hover>
            <thead>
              <tr>
                {columns.map((column) => (
                  <th key={column.Header}>{column.Header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((row: any) => (
                  <tr key={row._id}>
                    <td>{row.name}</td>
                    <td>{row.email}</td>
                    <td>{row.contact}</td>
                    <td>
                      <Link href={`/user/wallet-history/${row._id}`} legacyBehavior>
                        <a>{row.walletBalance}</a>
                      </Link>
                    </td>
                    <td>
                        <Button variant="link" onClick={() => handleShowModal(row._id)}>
                            Wallet Update
                        </Button>
                    </td>
                    <td>
                      <Link href={`/user/vacations/${row._id}`} legacyBehavior>
                        <a>Vacations</a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/user/manual-recharges/${row._id}`} legacyBehavior>
                        <a>Manual Recharges</a>
                      </Link>
                    </td>
                    <td>{row.dob}</td>
                    <td>
                      <Link href={`/user/membership/${row._id}`} legacyBehavior>
                        <a>{row.membership_active ? "Active" : "Deactive"}</a>
                      </Link>
                    </td>
                    <td>
                      <Link href={`/user/order-history/${row._id}`} legacyBehavior>
                        <a>{row.orders.length}</a>
                      </Link>
                    </td>
                    <td>{moment(row.createdAt).format("Do MMM YY")}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    No User Data available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      {showModal && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Payment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formPayment">
                <Form.Label>Payment Amount</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter payment amount"
                  name="paymentAmount"
                  value={formData.paymentAmount}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Col>
  );
};

export default User;
