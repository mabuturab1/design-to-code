import React from 'react';
import { Typography, Box } from '@mui/material';

const PrivacyPolicy = () => {
  return (
    <Box p={5} px={10}>
      <Typography variant="h5" gutterBottom>
        Conovotech Privacy Policy
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Effective Date: June 1, 2023
      </Typography>

      <Box my={2}>
        <Typography variant="body1">
          At Conovotech, we are committed to protecting the privacy and security of your personal information. This Privacy Policy applies solely to our landing page and outlines how we collect, use, disclose, and safeguard the data we gather from visitors to our website.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          Information We Collect:
        </Typography>
        <Typography variant="body1">
          1. Cookies and Usage Data: Our landing page may use cookies and similar tracking technologies to collect non-personal information about your interactions with the website. This includes your IP address, browser type, operating system, pages viewed, and the referring website.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          How We Use Your Information:
        </Typography>
        <Typography variant="body1">
          1. Analytical Purposes: We use cookies and usage data to analyze website traffic and user behavior, which helps us improve the functionality and user experience of our landing page.
          <br />
          2. Communication: If you voluntarily provide your contact information through our landing page, we may use it to respond to your inquiries or send you relevant updates and marketing communications. You can opt-out of these communications at any time.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          Data Sharing and Disclosure:
        </Typography>
        <Typography variant="body1">
          We do not sell, trade, or rent your personal information to third parties. However, we may share non-personal information collected through cookies and usage data with trusted third-party service providers for analytical purposes. These entities are obligated to maintain the confidentiality of the information and use it solely for the purposes outlined in this Privacy Policy.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          Data Security:
        </Typography>
        <Typography variant="body1">
          We take reasonable measures to protect the information collected on our landing page from unauthorized access, disclosure, alteration, or destruction. While we strive to protect your data, please be aware that no method of transmission over the internet or electronic storage is completely secure.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          Your Choices:
        </Typography>
        <Typography variant="body1">
          You can adjust your browser settings to refuse cookies or receive a notification when cookies are being sent. However, please note that certain features of our landing page may not function correctly without cookies.
        </Typography>
      </Box>

      <Box my={2}>
        <Typography variant="h6" gutterBottom>
          Changes to this Policy:
        </Typography>
        <Typography variant="body1">
          We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will post the revised version on our landing page, and the updated date will be mentioned at the beginning of the policy.
        </Typography>
      </Box>

      <Typography variant="body1">
        By visiting and using our landing page, you consent to the terms outlined in this Privacy Policy.
      </Typography>

      <Box my={2}>
        <Typography variant="body1">
          For any concerns or inquiries about our privacy practices related to the landing page, please reach out to us at contact@conovotech.com.
        </Typography>
      </Box>

      <Typography variant="body1">
        Thank you for visiting Conovotech landing page.
      </Typography>
    </Box>
  );
};

export default PrivacyPolicy;
