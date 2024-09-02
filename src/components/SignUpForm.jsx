import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      confirmEmail: '',
      password: '',
      sex: '',
      month: '',
      day: '',
      year: '',
      address: '',
      city: '',
      state: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('email'), null], 'Emails must match')
        .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
        .required('Required'),
      sex: Yup.string().required('Required'),
      month: Yup.string().required('Required'),
      day: Yup.number()
        .min(1, 'Invalid day')
        .max(31, 'Invalid day')
        .required('Required'),
      year: Yup.number()
        .min(1900, 'Invalid year')
        .max(new Date().getFullYear(), 'Invalid year')
        .required('Required'),
      address: Yup.string()
        .max(200, 'Must be 200 characters or less')
        .required('Required'),
      city: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      state: Yup.string()
        .max(30, 'Must be 2 characters')
        .required('Required'),
      zip: Yup.string().required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await fetch('http://localhost:3001/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error('Failed to save user data');
        }

        alert('Sign Up successfully!');
        
        resetForm();
        
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error saving your data.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
      <div>
        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div className="text-red-600 text-sm">{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div className="text-red-600 text-sm">{formik.errors.lastName}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-600 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700">Re-enter Email</label>
        <input
          id="confirmEmail"
          name="confirmEmail"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmEmail}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.confirmEmail && formik.errors.confirmEmail ? (
          <div className="text-red-600 text-sm">{formik.errors.confirmEmail}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-600 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="sex" className="block text-sm font-medium text-gray-700">I am</label>
        <select
          id="sex"
          name="sex"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.sex}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        >
          <option value="" label="Select sex" />
          <option value="male" label="Male" />
          <option value="female" label="Female" />
        </select>
        {formik.touched.sex && formik.errors.sex ? (
          <div className="text-red-600 text-sm">{formik.errors.sex}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Birthday</label>
        <div className="flex space-x-2">
          <select
            id="month"
            name="month"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.month}
            className="block w-1/3 p-2 border border-gray-300 rounded-md"
          >
            <option value="" label="Month" />
            <option value="January" label="January" />
            <option value="February" label="February" />
            <option value="March" label="March" />
            <option value="April" label="April" />
            <option value="May" label="May" />
            <option value="June" label="June" />
            <option value="July" label="July" />
            <option value="August" label="August" />
            <option value="September" label="September" />
            <option value="October" label="October" />
            <option value="November" label="November" />
            <option value="December" label="December" />
          </select>

          <input
            id="day"
            name="day"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.day}
            className="block w-1/3 p-2 border border-gray-300 rounded-md"
          />
          
          <input
            id="year"
            name="year"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.year}
            className="block w-1/3 p-2 border border-gray-300 rounded-md"
          />
        </div>
        {(formik.touched.month && formik.errors.month) ||
        (formik.touched.day && formik.errors.day) ||
        (formik.touched.year && formik.errors.year) ? (
          <div className="text-red-600 text-sm">Invalid date</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
        <input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.address}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.address && formik.errors.address ? (
          <div className="text-red-600 text-sm">{formik.errors.address}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
        <input
          id="city"
          name="city"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.city}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.city && formik.errors.city ? (
          <div className="text-red-600 text-sm">{formik.errors.city}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
        <input
          id="state"
          name="state"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.state}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.state && formik.errors.state ? (
          <div className="text-red-600 text-sm">{formik.errors.state}</div>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="zip" className="block text-sm font-medium text-gray-700">ZIP Code</label>
        <input
          id="zip"
          name="zip"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.zip}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
        />
        {formik.touched.zip && formik.errors.zip ? (
          <div className="text-red-600 text-sm">{formik.errors.zip}</div>
        ) : null}
      </div>

      <div className="mt-6">
        <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-md">Sign Up</button>
      </div>
    </form>
  );
};

export default SignupForm;
