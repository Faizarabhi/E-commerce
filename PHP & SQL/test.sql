SELECT count(id) FROM employee GROUP BY (day(create_at))  ;
SELECT * FROM employee WHERE  (create_at LIKE '2021-10-03%');
SELECT * FROM   employe WHERE email LIKE '[^aeiouy]%[1-9]@%';//
UPDATE employe SET first_name = LOWER(first_name), last_name = LOWER(last_name) ;
SELECT LOWER(first_name) , LOWER(last_name) FROM employee


