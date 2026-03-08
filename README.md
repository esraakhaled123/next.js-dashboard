# Spark Dashboard

A modern and responsive **Admin Dashboard** built using **Next.js**, **Redux Toolkit**, and **Tailwind CSS**.
The application provides product analytics, a chart overview, and a searchable products management section.

---

## Live Demo

https://next-js-dashboard-flax-nine.vercel.app/dashboard

---

## GitHub Repository

https://github.com/esraakhaled123/next.js-dashboard

---

## Features

### Dashboard

* Statistics cards displaying:

  * Total number of products
  * Total products value
  * Average rating
  * Number of product categories
* Product price overview chart using **Recharts**
* Responsive layout optimized for desktop and mobile devices

### Products Section

* Displays a list of products from the global Redux store
* **Search functionality** to filter products by title
* **Sorting** to organize products based on different criteria
* **Pagination system** to navigate through product pages
* **Export functionality** to download product data as **Excel** or **PDF**
* Responsive product cards layout


### UI / UX

* Responsive sidebar navigation
* Smooth scrolling navigation between sections
* Clean and modern dashboard interface
* Reusable React components

---

## Tech Stack

* Next.js (App Router)
* React
* TypeScript
* Redux Toolkit
* Tailwind CSS
* Recharts

---

## Installation

Clone the repository:

```bash
git clone https://github.com/esraakhaled123/next.js-dashboard.git
```

Navigate to the project folder:

```bash
cd next.js-dashboard
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the project in your browser:

http://localhost:3000

---

## Implementation Approach

The project was developed using **Next.js with the App Router** to create a modern and scalable React application.

**Redux Toolkit** is used for global state management, allowing product data and authentication state to be accessed across multiple components such as the dashboard statistics, charts, and the products section.

The **Products page** includes search and pagination functionality to help users easily browse and filter through product data.

The user interface was built using **Tailwind CSS** to create a clean, responsive, and modern dashboard layout.

For data visualization, **Recharts** was used to display product price insights in a chart format.

The application structure follows a **component-based architecture**, separating the UI into reusable parts such as:

* Sidebar navigation
* Statistic cards
* Chart component
* Products section
