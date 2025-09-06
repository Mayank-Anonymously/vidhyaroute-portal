import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import ServicesForm from 'Components/pages_componets/services/form';

const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>Add Services | Vidhyaroute -Admin </title>
			</Head>
			<div className='page-content'>
				<ServicesForm />
			</div>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};
export default index;
