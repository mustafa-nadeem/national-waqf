/**
 * Grant Application Form Field Configuration
 * Easy to edit - just modify this array to change form fields
 */

export const GRANT_APPLICATION_FIELDS = [
  {
    name: 'organisationName',
    label: 'Organisation Name',
    type: 'text',
    required: true,
    placeholder: 'Enter your organisation\'s registered name',
    section: 'organisation',
  },
  {
    name: 'organisationWebsite',
    label: 'Organisation Website',
    type: 'url',
    required: false,
    placeholder: 'https://www.example.org (optional)',
    section: 'organisation',
  },
  {
    name: 'contactName',
    label: 'Contact Name',
    type: 'text',
    required: true,
    placeholder: 'Full name of primary contact',
    section: 'contact',
  },
  {
    name: 'contactEmail',
    label: 'Contact Email',
    type: 'email',
    required: true,
    placeholder: 'contact@organisation.org',
    section: 'contact',
  },
  {
    name: 'contactPhone',
    label: 'Contact Phone',
    type: 'tel',
    required: false,
    placeholder: '+44 (optional)',
    section: 'contact',
  },
  {
    name: 'projectName',
    label: 'Project Name',
    type: 'text',
    required: true,
    placeholder: 'What is your project called?',
    section: 'project',
  },
  {
    name: 'projectSummary',
    label: 'Project Summary',
    type: 'textarea',
    required: true,
    placeholder: 'Describe your project, its goals, and expected impact (minimum 50 characters)',
    section: 'project',
    rows: 5,
    minLength: 50,
  },
  {
    name: 'amountRequested',
    label: 'Amount Requested (£)',
    type: 'number',
    required: true,
    placeholder: 'e.g., 10000',
    section: 'project',
    min: 100,
  },
  {
    name: 'locationServed',
    label: 'Location / Region Served',
    type: 'text',
    required: true,
    placeholder: 'e.g., Greater Manchester, London Borough of Tower Hamlets',
    section: 'project',
  },
  {
    name: 'attachmentNote',
    label: 'Supporting Documents',
    type: 'file',
    required: false,
    placeholder: 'Upload supporting documents (optional)',
    section: 'documents',
    accept: '.pdf,.doc,.docx',
    helpText: 'You may upload additional documents after initial submission.',
  },
];

export const FORM_SECTIONS = [
  { id: 'organisation', title: 'Organisation Details' },
  { id: 'contact', title: 'Contact Information' },
  { id: 'project', title: 'Project Details' },
  { id: 'documents', title: 'Supporting Documents' },
];
