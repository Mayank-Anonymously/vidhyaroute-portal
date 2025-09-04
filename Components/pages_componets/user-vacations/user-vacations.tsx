import React, { useEffect, useMemo, useState } from "react";
import { Table, Card, Col, FormControl  } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Link from "next/link";
import { GetAllVacations } from "Components/slices/user_vacations/thunk";
import { DELETE_VACATION_BY_ID, baseURL } from "Components/helpers/url_helper";
import axios from "axios";
import Swal from "sweetalert2";


const UserVactions = () => {
  const dispatch: any = useDispatch();
  const [search, setSearch] = useState("");

  const data = useSelector((state: any) => state.uservacations.uservacations || []);
  const handleEndVacations = async(vacation_id:any)=>{
    try {
        const data:any = await axios.delete(`${baseURL}${DELETE_VACATION_BY_ID}${vacation_id}`);
        const {baseResponse,response}:any = data;
        if (baseResponse.status === 1) {
          Swal.fire({
            title: "Success",
            text: baseResponse.message,
            icon: "success",
          });
          dispatch(GetAllVacations());
        }else if (baseResponse.status === 0) {
          Swal.fire({
            title: "error",
            text: baseResponse.message,
            icon: "error",
          });
        }
      } catch (error) {
        console.error("Error toggling status:", error);
      }
  }


  useEffect(() => {
    dispatch(GetAllVacations());
  }, [dispatch]);

  // Columns definition
  const columns = useMemo(
    () => [
      { Header: "Customer Name", accessor: "name" },
      { Header: "Vacation Start Date", accessor: "start_date" },
      { Header: "Vacation End Date", accessor: "end_date" },
      { Header: "End vacation", accessor: "end_vacation" },
    ],
    []
  );

  // Filter the data based on search input
  const filteredData = data.filter((row: any) => {
    const customerName = row?.user_id?.name?.toLowerCase() || "";
    const startDate = moment(row?.start_date).format("Do MMM YY").toLowerCase();
    const endDate = moment(row?.end_date).format("Do MMM YY").toLowerCase();


    return (
      customerName.includes(search.toLowerCase()) ||
      startDate.includes(search.toLowerCase()) ||
      endDate.includes(search.toLowerCase()) 
    );
  });

  return (
    <Col xl={12}>
      <Card>
        <Card.Header>
          <h4 className="card-title mb-0">All Users Vactions</h4>
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
                    <td>{row.user_id.name}</td>
                    <td>{moment(row.start_date).format("Do MMM YY")}</td>
                    <td>{moment(row.end_date).format("Do MMM YY")}</td>
                    <td><button className="btn btn-success" onClick={()=>handleEndVacations(row._id)}>End vacation</button></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={columns.length} className="text-center">
                    No User Vacations available.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserVactions;
