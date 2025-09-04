import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import UniversitiesForm from 'Components/pages_componets/universities/form';

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Add Universties | Vidhyaroute -Admin </title>
			</Head>
			<div className='page-content'>
				<UniversitiesForm />
				{/* <HubsTable /> */}
			</div>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};
export default index;
