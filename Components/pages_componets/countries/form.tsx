import React, { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row, Form, Button } from 'react-bootstrap';
import { AddNewCNT } from 'Components/slices/countrySlice/thunk';

const CountryForm = () => {
	const dispatch: any = useDispatch();
	const editorRef = useRef<any>();
	const [editor, setEditor] = useState(false);
	const { CKEditor, ClassicEditor }: any = editorRef.current || {};

	const { category } = useSelector((state: any) => ({
		category: state.CategorySlice.categorydata,
	}));

	useEffect(() => {
		// dispatch(GetAllCategory());
		editorRef.current = {
			CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
			ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
		};
		setEditor(true);
	}, []);

	const formik: any = useFormik({
		enableReinitialize: true,
		initialValues: {
			country_name: '', // ✅ New field
			meta_title: '',
			meta_keywords: '',
			meta_description: '',
			page_url: '',
			title: '',
			page_content: '',
		},
		validationSchema: Yup.object({
			country_name: Yup.string().required('Country name is required.'), // ✅ Validation
			meta_title: Yup.string().required('Meta title is required.'),
			meta_keywords: Yup.string().required('Meta keywords are required.'),
			meta_description: Yup.string().required('Meta description is required.'),
			page_url: Yup.string().required('Page URL is required.'),
			title: Yup.string().required('Title is required.'),
			page_content: Yup.string().required('Page content is required.'),
		}),
		onSubmit: (values) => {
			dispatch(AddNewCNT(values));
			formik.resetForm();
		},
	});

	return (
		<div className='container-fluid'>
			<Card>
				<Form
					autoComplete='off'
					noValidate
					className='needs-formik p-3'
					onSubmit={(e) => {
						e.preventDefault();
						formik.handleSubmit();
					}}>
					{/* ✅ Country Name Field */}
					<Row className='mb-3'>
						<Col>
							<Form.Label>Country Name</Form.Label>
							<Form.Control
								name='country_name'
								value={formik.values.country_name}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={
									formik.touched.country_name && !!formik.errors.country_name
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.country_name}
							</Form.Control.Feedback>
						</Col>
					</Row>

					{/* Meta Fields */}
					<Row className='mb-3'>
						<Col>
							<Form.Label>Meta Title</Form.Label>
							<Form.Control
								name='meta_title'
								value={formik.values.meta_title}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={
									formik.touched.meta_title && !!formik.errors.meta_title
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.meta_title}
							</Form.Control.Feedback>
						</Col>
						<Col>
							<Form.Label>Meta Keywords</Form.Label>
							<Form.Control
								name='meta_keywords'
								value={formik.values.meta_keywords}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={
									formik.touched.meta_keywords && !!formik.errors.meta_keywords
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.meta_keywords}
							</Form.Control.Feedback>
						</Col>
					</Row>

					<Row className='mb-3'>
						<Col>
							<Form.Label>Meta Description</Form.Label>
							<Form.Control
								as='textarea'
								rows={2}
								name='meta_description'
								value={formik.values.meta_description}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={
									formik.touched.meta_description &&
									!!formik.errors.meta_description
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.meta_description}
							</Form.Control.Feedback>
						</Col>
						<Col>
							<Form.Label>Page URL</Form.Label>
							<Form.Control
								name='page_url'
								value={formik.values.page_url}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.page_url && !!formik.errors.page_url}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.page_url}
							</Form.Control.Feedback>
						</Col>
					</Row>

					<Row className='mb-3'>
						<Col>
							<Form.Label>Title</Form.Label>
							<Form.Control
								name='title'
								value={formik.values.title}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.title && !!formik.errors.title}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.title}
							</Form.Control.Feedback>
						</Col>
					</Row>

					<Row>
						<Col>
							<Form.Label>Page Content</Form.Label>
							{editor ? (
								<CKEditor
									editor={ClassicEditor}
									data={formik.values.page_content}
									onChange={(event: any, editor: any) => {
										const data = editor.getData();
										formik.setFieldValue('page_content', data);
									}}
								/>
							) : (
								<p>Loading editor...</p>
							)}
							{formik.touched.page_content && formik.errors.page_content && (
								<div className='text-danger mt-1'>
									{formik.errors.page_content}
								</div>
							)}
						</Col>
					</Row>

					<div className='mt-4'>
						<Button
							variant='primary'
							type='submit'>
							Save Page
						</Button>
					</div>
				</Form>
			</Card>
		</div>
	);
};

export default CountryForm;
