import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
const index = () => {
	return (
		<React.Fragment>
			<Head>
				<title>User | Vidhyaroute -Admin </title>
			</Head>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};
export default index;
