import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row, Form, Button, Badge } from 'react-bootstrap';
import { AddNewUNI } from 'Components/slices/universitySlice/thunk';
import { GettAllCNT } from 'Components/slices/countrySlice/thunk';
import { useDropzone } from 'react-dropzone';

const UniversitiesForm = () => {
	const dispatch: any = useDispatch();
	const editorRef = useRef<any>();
	const [editor, setEditor] = useState(false);
	const { CKEditor, ClassicEditor }: any = editorRef.current || {};

	const { contentData } = useSelector((state: any) => ({
		contentData: state.countries.contentData,
	}));

	// Dropzone handler
	const onDrop = useCallback((acceptedFiles: any) => {
		if (acceptedFiles.length > 0) {
			formik.setFieldValue('image', acceptedFiles[0]);
		}
	}, []);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: { 'image/*': [] },
		multiple: false,
	});

	useEffect(() => {
		dispatch(GettAllCNT());
		editorRef.current = {
			CKEditor: require('@ckeditor/ckeditor5-react').CKEditor,
			ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
		};
		setEditor(true);
	}, [dispatch]);

	const formik: any = useFormik({
		enableReinitialize: true,
		initialValues: {
			// 🔹 SEO fields
			meta_title: '',
			meta_keywords: '',
			meta_description: '',
			category: '',
			page_url: '',
			page_image_tag: '',
			title: '',
			page_content: '',
			image: null,

			// 🔹 New University fields
			name: '',
			location: '',
			ranking: '',
			description: '',
			tuitionRange: '',
			highlights: [],
			popularPrograms: [],
			highlightInput: '',
			programInput: '',
		},
		validationSchema: Yup.object({
			meta_title: Yup.string().required('Meta title is required.'),
			meta_keywords: Yup.string().required('Meta keywords are required.'),
			meta_description: Yup.string().required('Meta description is required.'),
			category: Yup.string().required('Category is required.'),
			page_url: Yup.string().required('Page URL is required.'),
			page_image_tag: Yup.string().required('Page image tag is required.'),
			title: Yup.string().required('Title is required.'),
			page_content: Yup.string().required('Page content is required.'),
			image: Yup.mixed().required('Image is required.'),

			// New fields validation
			name: Yup.string().required('University name is required.'),
			location: Yup.string().required('Location is required.'),
			ranking: Yup.string(),
			description: Yup.string(),
			tuitionRange: Yup.string(),
		}),
		onSubmit: (values) => {
			const { highlightInput, programInput, ...rest } = values; // remove temp inputs
			dispatch(AddNewUNI(rest));
			formik.resetForm();
		},
	});

	// Chip Handlers
	const addHighlight = () => {
		if (formik.values.highlightInput.trim() !== '') {
			formik.setFieldValue('highlights', [
				...formik.values.highlights,
				formik.values.highlightInput.trim(),
			]);
			formik.setFieldValue('highlightInput', '');
		}
	};
	const removeHighlight = (index: number) => {
		const updated = [...formik.values.highlights];
		updated.splice(index, 1);
		formik.setFieldValue('highlights', updated);
	};

	const addProgram = () => {
		if (formik.values.programInput.trim() !== '') {
			formik.setFieldValue('popularPrograms', [
				...formik.values.popularPrograms,
				formik.values.programInput.trim(),
			]);
			formik.setFieldValue('programInput', '');
		}
	};
	const removeProgram = (index: number) => {
		const updated = [...formik.values.popularPrograms];
		updated.splice(index, 1);
		formik.setFieldValue('popularPrograms', updated);
	};

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
					{/* Upload Image Section */}
					<Row className='mb-3'>
						<Col md={6}>
							<Form.Label>Upload Image</Form.Label>
							<div
								{...getRootProps()}
								className='border p-3 text-center'
								style={{ cursor: 'pointer' }}>
								<input {...getInputProps()} />
								<p>
									{isDragActive
										? 'Drop the image here ...'
										: "Drag 'n' drop an image here, or click to select"}
								</p>
							</div>
							{formik.touched.image && formik.errors.image && (
								<div className='text-danger mt-1'>{formik.errors.image}</div>
							)}

							{formik.values.image && (
								<div className='mt-2'>
									<img
										src={
											formik.values.image instanceof File
												? URL.createObjectURL(formik.values.image)
												: formik.values.image
										}
										alt='preview'
										className='img-thumbnail'
										width='150'
									/>
								</div>
							)}
						</Col>
					</Row>

					{/* University Info */}
					<Row className='mb-3'>
						<Col>
							<Form.Label>University Name</Form.Label>
							<Form.Control
								name='name'
								value={formik.values.name}
								onChange={formik.handleChange}
								isInvalid={formik.touched.name && !!formik.errors.name}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.name}
							</Form.Control.Feedback>
						</Col>
						<Col>
							<Form.Label>Location</Form.Label>
							<Form.Control
								name='location'
								value={formik.values.location}
								onChange={formik.handleChange}
								isInvalid={formik.touched.location && !!formik.errors.location}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.location}
							</Form.Control.Feedback>
						</Col>
					</Row>

					<Row className='mb-3'>
						<Col>
							<Form.Label>Ranking</Form.Label>
							<Form.Control
								name='ranking'
								value={formik.values.ranking}
								onChange={formik.handleChange}
							/>
						</Col>
						<Col>
							<Form.Label>Tuition Range</Form.Label>
							<Form.Control
								name='tuitionRange'
								value={formik.values.tuitionRange}
								onChange={formik.handleChange}
							/>
						</Col>
					</Row>

					<Row className='mb-3'>
						<Col>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								name='description'
								value={formik.values.description}
								onChange={formik.handleChange}
							/>
						</Col>
					</Row>

					{/* Highlights */}
					<Row className='mb-3'>
						<Col>
							<Form.Label>Highlights</Form.Label>
							<div className='d-flex gap-2'>
								<Form.Control
									name='highlightInput'
									value={formik.values.highlightInput}
									onChange={formik.handleChange}
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											e.preventDefault();
											addHighlight();
										}
									}}
									placeholder='Add highlight and press Enter'
								/>
								<Button
									type='button'
									onClick={addHighlight}>
									Add
								</Button>
							</div>
							<div className='mt-2'>
								{formik.values.highlights.map((item: string, index: number) => (
									<Badge
										key={index}
										bg='secondary'
										className='me-2 p-2'>
										{item}{' '}
										<span
											style={{ cursor: 'pointer' }}
											onClick={() => removeHighlight(index)}>
											&times;
										</span>
									</Badge>
								))}
							</div>
						</Col>
					</Row>

					{/* Programs */}
					<Row className='mb-3'>
						<Col>
							<Form.Label>Popular Programs</Form.Label>
							<div className='d-flex gap-2'>
								<Form.Control
									name='programInput'
									value={formik.values.programInput}
									onChange={formik.handleChange}
									onKeyDown={(e) => {
										if (e.key === 'Enter') {
											e.preventDefault();
											addProgram();
										}
									}}
									placeholder='Add program and press Enter'
								/>
								<Button
									type='button'
									onClick={addProgram}>
									Add
								</Button>
							</div>
							<div className='mt-2'>
								{formik.values.popularPrograms.map(
									(item: string, index: number) => (
										<Badge
											key={index}
											bg='info'
											className='me-2 p-2'>
											{item}{' '}
											<span
												style={{ cursor: 'pointer' }}
												onClick={() => removeProgram(index)}>
												&times;
											</span>
										</Badge>
									)
								)}
							</div>
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
					</Row>

					<Row className='mb-3'>
						<Col>
							<Form.Label>Country</Form.Label>
							<Form.Select
								name='category'
								value={formik.values.category}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={formik.touched.category && !!formik.errors.category}>
								<option value=''>Select Country</option>
								{contentData?.map((cnt: any) => (
									<option
										key={cnt._id}
										value={cnt._id}>
										{cnt.title}
									</option>
								))}
							</Form.Select>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.category}
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
							<Form.Label>Page Image Tag</Form.Label>
							<Form.Control
								name='page_image_tag'
								value={formik.values.page_image_tag}
								onChange={formik.handleChange}
								onBlur={formik.handleBlur}
								isInvalid={
									formik.touched.page_image_tag &&
									!!formik.errors.page_image_tag
								}
							/>
							<Form.Control.Feedback type='invalid'>
								{formik.errors.page_image_tag}
							</Form.Control.Feedback>
						</Col>
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

					{/* Page Content */}
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

export default UniversitiesForm;
