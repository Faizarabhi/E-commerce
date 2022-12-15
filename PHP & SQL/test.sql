SELECT count(id) FROM employe ORDER BY (day(create_at))   ASC;
SELECT * FROM employe WHERE (create_at = (2021-10-03));
SELECT * FROM   employe WHERE email LIKE '[aeiouy]%[1-9]@%';

SELECT LOWER(first_name) , LOWER(last_name) FROM  employe;

