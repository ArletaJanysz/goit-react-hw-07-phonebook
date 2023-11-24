import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../services/api';

export const fetchContactsAsync = createAsyncThunk(
  'contacts/fetchContactsAsync',
  async () => {
    const contacts = await api.fetchContacts();
    return contacts;
  }
);

export const addContactAsync = createAsyncThunk(
  'contacts/addContactAsync',
  async contact => {
    const newContact = await api.addContact(contact);
    return newContact;
  }
);

export const deleteContactAsync = createAsyncThunk(
  'contacts/deleteContactAsync',
  async contactId => {
    await api.deleteContact(contactId);
    return contactId;
  }
);
