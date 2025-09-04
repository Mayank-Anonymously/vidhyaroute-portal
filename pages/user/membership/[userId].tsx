import React, { ReactElement } from 'react';
import Head from 'next/head';
import Layout from '@common/Layout';
import Membership from 'Components/pages_componets/user/membership/membership';

const index = ({ userId }: any) => {
	return (
		<React.Fragment>
			<Head>
				<title>User Detail | Vidhyaroute -Admin </title>
			</Head>

			<div className='page-content'>
				<Membership userId={userId} />
			</div>
		</React.Fragment>
	);
};

index.getLayout = (page: ReactElement) => {
	return <Layout>{page}</Layout>;
};

export const getServerSideProps = (context: any) => {
	const { userId } = context.query;

	return { props: { userId } };
};

export default index;
