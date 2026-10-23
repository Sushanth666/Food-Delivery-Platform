import React from 'react';
import { AdminProvider } from '../context/AdminContext';
import AdminLayout from '../components/admin/AdminLayout';

export default function AdminPage() {
  return (
    <AdminProvider>
      <AdminLayout />
    </AdminProvider>
  );
}
