import json

# Load the data from your SurveillanceFrequency.json
with open('experiment.json') as f:
    raw_data = json.load(f)

# Transform the data
transformed_data = []

for country_data in raw_data['progressionChartData'][0]['countryData']:
    for virus_data in country_data['md']:
        transformed_data.append({
            "ym": f"{virus_data['ym'][:4]}-{virus_data['ym'][4:6]}-01",  # Format ym to YYYY-MM-DD
            "vn": country_data['vn'],  # Assign vn to industry
            "p": virus_data['p'],  # Assign p to unemployed
        })

# Save the transformed data to a new JSON file
with open('transformed_data.json', 'w') as f:
    json.dump(transformed_data, f, indent=2)

print("Transformation complete, data saved as transformed_data.json.")
