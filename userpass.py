import unittest

def validate_username(username):
    # Assume a valid username must be 5-20 characters long and contain only letters and numbers
    return username.isalnum() and 5 <= len(username) <= 20

def validate_password(password):
    # Assume a valid password must be 8-20 characters long, contain at least one number and one special character
    if len(password) < 8 or len(password) > 20:
        return False
    has_number = any(char.isdigit() for char in password)
    has_special = any(not char.isalnum() for char in password)
    return has_number and has_special

class TestUserValidation(unittest.TestCase):
    
    def test_valid_username(self):
        self.assertTrue(validate_username("123323"))
        
    def test_valid_password(self):
        self.assertTrue(validate_password("Valid123!"))
        

        
    def test_invalid_password_no_number(self):
        self.assertFalse(validate_password("NoNumbers!"))
        
    def test_invalid_password_no_special_char(self):
        self.assertFalse(validate_password("NoSpecial123"))
        
    def test_invalid_password_too_long(self):
        self.assertFalse(validate_password("13323!"))

if __name__ == "__main__":
    unittest.main()
