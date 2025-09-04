import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import TransactionForm from 'Components/pages_componets/accounting/form';
import Membershiptable from 'Components/pages_componets/membership/membershiptbale';
import AccountingTable from 'Components/pages_componets/accounting/accountingtable';
import UserVactions from 'Components/pages_componets/user-vacations/user-vacations';

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>User Vacations | Vidhyaroute -Admin </title>
			</Head>
			<div className='page-content'>
				<UserVactions />
			</div>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};
export default index;
