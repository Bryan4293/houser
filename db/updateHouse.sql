UPDATE houses SET
name = $2,
address = $3,
city = $4,
state = $5,
zip_code = $6,
image_url = $7,
mortgage = $8,
rent = $9
WHERE house_id = $1;

SELECT * FROM houses;