import React, { useEffect, useMemo } from 'react';
import { Card, Col, Dropdown } from 'react-bootstrap';
import TableContainer from '@common/TableContainer';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct } from 'Components/slices/product/thunk';
import { GetAllQueries } from 'Components/slices/query/thunk';

const QueryTable = () => {
	const dispatch: any = useDispatch();

	const { queriesData } = useSelector((state: any) => ({
		queriesData: state.queries.queriesData,
	}));

	const columns = useMemo(
		() => [
			{
				Header: 'S.No',
				accessor: (_: any, index: number) => index + 1, // auto increment
				disableFilters: true,
			},
			{
				Header: 'Name',
				accessor: 'name',
				disableFilters: true,
			},
			{
				Header: 'Email',
				accessor: 'email',
				disableFilters: true,
			},
			{
				Header: 'Phone',
				accessor: 'phone',
				disableFilters: true,
			},
			{
				Header: 'University',
				accessor: 'university',
				disableFilters: true,
			},
			{
				Header: 'Query',
				accessor: 'query',
				disableFilters: true,
			},
		],
		[]
	);

	useEffect(() => {
		dispatch(GetAllQueries());
	}, [dispatch]);

	return (
		<Col xl={12}>
			<Card>
				<Card.Header className='align-items-center d-flex mb-n2'>
					<h4 className='card-title mb-0 flex-grow-1'>Student Queries</h4>
					<div className='flex-shrink-0'>
						<Dropdown className='card-header-dropdown'>
							<Dropdown.Toggle
								variant='link-dark'
								className='text-reset dropdown-btn arrow-none p-0'>
								<span className='fw-semibold text-uppercase fs-12'>
									Sort by:
								</span>
								<span className='text-muted'>
									Today<i className='mdi mdi-chevron-down ms-1'></i>
								</span>
							</Dropdown.Toggle>
							<Dropdown.Menu align='end'>
								<Dropdown.Item href='#'>Today</Dropdown.Item>
								<Dropdown.Item href='#'>Yesterday</Dropdown.Item>
								<Dropdown.Item href='#'>Last 7 Days</Dropdown.Item>
								<Dropdown.Item href='#'>Last 30 Days</Dropdown.Item>
								<Dropdown.Item href='#'>This Month</Dropdown.Item>
								<Dropdown.Item href='#'>Last Month</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
					</div>
				</Card.Header>

				<TableContainer
					columns={columns || []}
					data={(queriesData || []).map((item: any, i: number) => ({
						...item,
						serial: i + 1,
					}))} // ⚠️ Make sure API returns these fields
					isGlobalFilter={false}
					iscustomPageSize={false}
					isBordered={false}
					customPageSize={6}
					tableClass='table-centered align-middle table-nowrap mb-0'
					theadClass='table-light'
				/>
			</Card>
		</Col>
	);
};

export default QueryTable;
