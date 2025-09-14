import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import CountryForm from 'Components/pages_componets/countries/form';
import QueryTable from 'Components/pages_componets/query/table';

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Add Country | Vidhyaroute -Admin </title>
			</Head>
			<div className='page-content'>
				<QueryTable />
			</div>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};
export default index;
