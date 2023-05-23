import * as yup from 'yup'

export const BlogValidation = yup.object({
    imageURL:yup.string().required("image is required"),
    title: yup.string().required("title is required").min(5),
    year:yup.number().positive().integer(),
    desc:yup.string().required('description is required')
})