import importlib.util, json
spec = importlib.util.spec_from_file_location('app', 'app.py')
app = importlib.util.module_from_spec(spec)
spec.loader.exec_module(app)
# sample data with missing/empty fields
# Provide a comprehensive sample covering all required fields for validation
sample = {
    "function": "Test Function",
    "service_area": "Technology",
    "sub_service_area": "Software",
    "skill": "Python",
    "grade": "Senior Engineer",
    "team": "Engineering",
    "role_description": "Develops software solutions",
    "responsibilities": ["Design", "Implement", "Test"],
    "skills": ["Python", "Flask", "Docker"],
    "total_experience": "5 years",
    "relevant_experience": "3 years",
    "education": "B.Sc Computer Science",
    "location": "Bangalore",
    "travel_requirement": "Low"
}
missing = app.validate_data(sample)
print('Missing fields:', missing)
