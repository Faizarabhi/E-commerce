SELECT count(id) FROM employe GROUP BY (day(create_at))   ASC;
SELECT * FROM employe WHERE  (create_at LIKE '2021-10-03%');
SELECT * FROM   employe WHERE email LIKE '[^aeiouy]%[1-9]@%';
UPDATE employe SET first_name = LOWER(first_name), last_name = LOWER(last_name) ;


