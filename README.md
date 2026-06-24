# JD Converter

This Flask application converts uploaded Job Description (JD) files (PDF or DOCX) into a Deloitte‑formatted Word document using the Groq LLM.

## Features

- **File Upload**: Supports PDF and DOCX uploads.
- **Text Extraction**: Uses `fitz` (PyMuPDF) for PDFs and `python-docx` for DOCX files.
- **LLM Conversion**: Sends the extracted text to Groq's `llama-3.3-70b-versatile` model to generate a structured JSON representation.
- **Validation & Normalization**:
  - A set of required fields is defined in `REQUIRED_FIELDS_MAP` with possible synonyms.
  - `normalize_data` maps any synonym to the standardized field name.
  - `validate_data` ensures all required fields are present and non‑empty (strings with content or non‑empty lists).
  - If validation fails, the API returns a clear HTML error listing the missing or empty fields.
- **Document Generation**: Populates a Word document using the validated data and returns it for download.

## How Validation Works

1. **Mapping**: `REQUIRED_FIELDS_MAP` maps each required field to a list of possible keys that may appear in the LLM output.
2. **Normalization**: `normalize_data` creates a new dictionary where the first found synonym for each field becomes the standardized key.
3. **Validation**: `validate_data` checks that each standardized field is present and contains a non‑empty value. Missing or empty fields are reported back to the client.

## Running the Application

```bash
# Install dependencies
pip install -r requirements.txt

# Set Groq API key in a .env file
echo "GROQ_API_KEY=your_api_key" > .env

# Start the server
python app.py
```

Visit `http://127.0.0.1:5000` in your browser, upload a JD file, and receive the generated Deloitte JD document.

## Testing Validation

A helper script `test_validation.py` demonstrates the validation logic by supplying a sample JSON with missing fields and printing the detected missing fields.
"# JD_Converter" 
