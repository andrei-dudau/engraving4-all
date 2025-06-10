import json

# Function to escape single and double quotes in strings for SQL
def escape_sql_string(s):
    # Escape both single and double quotes
    return s.replace("'", "''").replace('"', '\\"')

# Function to read JSON file and convert to a single SQL insert statement
def json_to_single_insert(json_file, table_name):
    # Read the JSON data from file
    with open(json_file, 'r') as file:
        data = json.load(file)
    
    # List to store the values for the INSERT statement
    values = []
    
    # Loop through the data and create values for the insert statement
    for item in data:
        id = item['id']
        name = item['name']
        price = item['price']
        link = item['link']
        
        # Escape special characters (single and double quotes) in name and link
        name = escape_sql_string(name)
        link = escape_sql_string(link)
        
        # Add the value tuple
        values.append(f"({id}, '{name}', {price}, '{link}')")
    
    # Join all values and create the full SQL insert statement
    values_str = ",\n".join(values)
    sql_statement = f"INSERT INTO {table_name} (id, name, price, link) VALUES \n{values_str};"
    
    # Return the SQL insert statement as a string
    return sql_statement

# Example usage
if __name__ == "__main__":
    json_file = 'products.json'  # Replace with your JSON file name
    table_name = 'products'  # Table name in your SQL database
    
    sql = json_to_single_insert(json_file, table_name)
    
    # Print the SQL insert statement
    print(sql)

    # Optionally, save to a file
    with open('insert_statements.sql', 'w') as output_file:
        output_file.write(sql)
