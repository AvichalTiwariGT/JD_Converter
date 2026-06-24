import importlib.util, json
spec = importlib.util.spec_from_file_location('app', 'app.py')
app = importlib.util.module_from_spec(spec)
spec.loader.exec_module(app)
# sample data with missing/empty fields
sample = {
    "function": "Test Function",
    "service_area": "",
    "skill": "Python",
    "responsibilities": [],
    "skills": ["coding"]
}
missing = app.validate_data(sample)
print('Missing fields:', missing)
