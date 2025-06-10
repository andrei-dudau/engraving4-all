import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Link, createTheme } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#104964',
    }
  },
});

const Faq: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const [firstNameHelper, setFirstNameHelper] = useState(' ');
  const [lastNameHelper, setLastNameHelper] = useState(' ');
  const [emailHelper, setEmailHelper] = useState(' ');
  const [phoneNumberHelper, setPhoneNumberHelper] = useState(' ');
  const [messageHelper, setMessageHelper] = useState(' ');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const validatePhoneNumber = (num: string) => {
    let newStr = "";
    let newNum = "";
    for (let i = 0; i < Math.min(num.length, 14); i++)
      if (Number.isInteger(parseInt(num[i])))
        newNum += num[i];

    if (num.length === 0)
      newStr = "";
    else if (newNum.length <= 3)
      newStr = "(" + newNum.substring(0, 3);
    else if (newNum.length <= 6)
      newStr = "(" + newNum.substring(0, 3) + ") " + newNum.substring(3, 6);
    else
      newStr = "(" + newNum.substring(0, 3) + ") " + newNum.substring(3, 6) + "-" + newNum.substring(6, 10);


    setPhoneNumber(newStr);

    if (num === "") {
      setPhoneNumberError(true);
      setPhoneNumberHelper("Please enter your phone number");
    } else {
      setPhoneNumberError(false);
      setPhoneNumberHelper(" ");
    }
  };

  const checkLength = (num: string) => {
    if (num.length !== 14) {
      setPhoneNumberError(true);
      setPhoneNumberHelper("Invalid phone number");
    }
  };

  const validateEmail = (str: string) => {
    setEmail(str);
    if (str === "") {
      setEmailError(true);
      setEmailHelper("Please enter your email");
    } else if (!(str.toLowerCase().match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    ))) {
      setEmailError(true);
      setEmailHelper("Invalid email");
    } else {
      setEmailError(false);
      setEmailHelper(" ");
    }
    return;
  };

  const validateFirstName = (str: string) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++)
      if (str[i].match(/[a-z]/i) || str === "")
        newStr += str[i];
    setFirstName(newStr);

    if (str === "") {
      setFirstNameError(true);
      setFirstNameHelper("Please enter your first name");
    } else {
      setFirstNameError(false);
      setFirstNameHelper(" ");
    }
  };

  const validateLastName = (str: string) => {
    let newStr = "";
    for (let i = 0; i < str.length; i++)
      if (str[i].match(/[a-z]/i) || str === "")
        newStr += str[i];
    setLastName(newStr);

    if (str === "") {
      setLastNameError(true);
      setLastNameHelper("Please enter your last name");
    } else {
      setLastNameError(false);
      setLastNameHelper(" ");
    }
  };

  const validateMessage = (str: string) => {
    setMessage(str);
    if (str === "") {
      setMessageError(true);
      setMessageHelper("Please enter a message");
    } else {
      setMessageError(false);
      setMessageHelper(" ");
    }
  };

  const handleSubmit = () => {
    const errorMessageElement = document.getElementById("errorMessage");
    let errorMsg = '';

    if (firstName === "") {
      setFirstNameError(true);
      setFirstNameHelper("Please enter your first name");
    }

    if (lastName === "") {
      setLastNameError(true);
      setLastNameHelper("Please enter your last name");
    }

    if (email === "") {
      setEmailError(true);
      setEmailHelper("Please enter your email");
    }

    if (phoneNumber === "") {
      setPhoneNumberError(true);
      setPhoneNumberHelper("Please enter your phone number");
    }

    if (message === "") {
      setMessageError(true);
      setMessageHelper("Please enter a message");
    }

    if (!(firstNameError || lastNameError || emailError || phoneNumberError || messageError) && errorMessageElement) {
      errorMessageElement.style.color = "black";
      errorMsg = 'FORM SUBMITTED';

      const data = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        message: message
      };

      console.log(data);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    }
    setError(errorMsg);
  };

  return (

    <Box sx={{ width: "100%" }}>
      <ThemeProvider theme={theme}>
        {/* Top Header */}
        <Box
          sx={{
            height: "200px",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            userSelect: "none"
          }}
        >
          <Box sx={{ width: "27%", height: "5px", backgroundColor: "#7a7463", mx: "5%" }}></Box>
          <Typography variant="h1" sx={{ fontSize: "4em", fontWeight: "bold", color: "#7a7463" }}>
            CONTACT
          </Typography>
          <Box sx={{ width: "27%", height: "5px", backgroundColor: "#7a7463", mx: "5%" }}></Box>
        </Box>

        {/* Contact */}
        <Box sx={{ width: "80%", height: "100%", display: "flex", alignItems: "stretch", paddingLeft: "10%", paddingRight: "10%", paddingBottom: "50px" }}>
          {/* Contact Info */}
          <Box sx={{ width: "50%", paddingTop: "50px", backgroundColor: "#AB9474", color: "#FDF9ED", borderRadius: "15px" }}>
            <Box sx={{ fontSize: "3em", fontWeight: "bold", paddingLeft: "12%" }}>
              Contact Information
            </Box>
            <Box sx={{ width: "100%", height: "70%", display: "flex", flexDirection: "column", fontSize: "1.5em", justifyContent: "space-evenly", textAlign: "center", paddingLeft: "12%" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <PhoneIcon fontSize="large" />
                <Typography sx={{ marginLeft: "20px", fontWeight: "bold", fontSize: "1em" }}>
                  (617) 642-4019
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <EmailIcon fontSize="large" />
                <Typography sx={{ marginLeft: "20px", fontWeight: "bold", fontSize: "1em" }}>
                  info@engraving4all.com
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <WatchLaterIcon fontSize="large" />
                <Typography sx={{ marginLeft: "20px", fontWeight: "bold", fontSize: "1em" }}>
                  9:00 AM - 5:00 PM (Mon - Fri)
                </Typography>
              </Box>
            </Box>
            <Box sx={{ width: "30%", display: "flex", justifyContent: "space-between", paddingLeft: "12%" }}>
              <Link color="#7a7463" href='https://www.facebook.com/207007019170500'>
                <InstagramIcon fontSize="large" />
              </Link>
              <Link color="inherit" href='https://www.facebook.com/207007019170500'>
                <FacebookIcon fontSize="large" />
              </Link>
              <Link color="inherit" href='https://www.etsy.com/shop/Engraving4All'>
                <ShoppingCartIcon fontSize="large" />
              </Link>
            </Box>
          </Box>

          {/* Form */}
          <Box sx={{ width: "50%", height: "100%", flexGrow: "1", paddingTop: "25px" }}>
            <Box sx={{ fontSize: "3em", fontWeight: "bold", paddingLeft: "10%", color: "#7a7463" }}>
              Personal Request
            </Box>
            <Box id="errorMessage" sx={{ width: "90%", paddingLeft: "10%", height: "50px", color: "red", textAlign: "center" }}>
              {error}
            </Box>
            <Box
              sx={{
                width: "90%",
                paddingLeft: "10%",
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",
                gap: "40px 0px",
              }}
            >
              <TextField
                id="firstName"
                label="First Name"
                value={firstName}
                helperText={firstNameHelper}
                error={firstNameError}
                onChange={(e) => validateFirstName(e.target.value)}
                variant="outlined"
                required={true}
                sx={{
                  width: "47%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7a7463", // Default border color
                    },
                    "&:hover fieldset": {
                      borderColor: "#7a7463", // Border color on hover
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7a7463", // Border color when focused
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7a7463", // Default label color
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#7a7463", // Label color when focused
                  },
                }}
                focused
              />
              <TextField
                id="lastName"
                label="Last Name"
                value={lastName}
                helperText={lastNameHelper}
                error={lastNameError}
                onChange={(e) => validateLastName(e.target.value)}
                variant="outlined"
                required={true}
                sx={{
                  width: "47%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7a7463",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7a7463",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#7a7463",
                  },
                }}
                focused
              />
              <TextField
                id="email"
                label="Email"
                value={email}
                helperText={emailHelper}
                error={emailError}
                onChange={(e) => validateEmail(e.target.value)}
                variant="outlined"
                required={true}
                sx={{
                  width: "47%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7a7463",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7a7463",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#7a7463",
                  },
                }}
                focused
              />
              <TextField
                id="phoneNumber"
                label="Phone Number"
                helperText={phoneNumberHelper}
                error={phoneNumberError}
                onChange={(e) => validatePhoneNumber(e.target.value)}
                onBlur={(e) => checkLength(e.target.value)}
                value={phoneNumber}
                variant="outlined"
                required={true}
                sx={{
                  width: "47%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7a7463",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7a7463",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#7a7463",
                  },
                }}
                focused
              />
              <TextField
                id="message"
                label="Message"
                value={message}
                helperText={messageHelper}
                error={messageError}
                onChange={(e) => validateMessage(e.target.value)}
                variant="outlined"
                multiline={true}
                minRows={10}
                required={true}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&:hover fieldset": {
                      borderColor: "#7a7463",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#7a7463",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "#7a7463",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#7a7463",
                  },
                }}
                focused
              />
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{ fontWeight: "bold", backgroundColor: "#7a7463" }}
              >
                Submit
              </Button>
            </Box>

          </Box>
        </Box></ThemeProvider>
    </Box>

  );
};

export default Faq;