CREATE TABLE `profile` (
`id` INT NOT NULL AUTO_INCREMENT,
`prenom` VARCHAR(255) NOT NULL,
`nom` VARCHAR(255) NOT NULL,
`genre` VARCHAR(50) NOT NULL,
`email` VARCHAR(50) NOT NULL,
`phone` VARCHAR(50) NOT NULL,
`age` INT NOT NULL,
`dob` VARCHAR(255),
`image_pr` VARCHAR(255) NOT NULL,
`critère_1` VARCHAR(255),
`critère_2` VARCHAR(255),
`critère_3` VARCHAR(255),
PRIMARY KEY (`id`)
);

INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Walter', 'Brown', 'homme', 'walter.brown@example.com', '0663584307', 25, '2/7/1999', 'https://this-person-does-not-exist.com/img/avatar-gene7f3bd82dfc676538ed3ecfb9d4c160d.jpg', 'plage', 'festif', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Donald', 'Mills', 'homme', 'donald.mills@example.com', '0652485605', 22, '5/7/1949', 'https://this-person-does-not-exist.com/img/avatar-gen1faede75daac3fce9ff6e821268e9da3.jpg', 'plage', 'culturel', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Danny', 'Gregory', 'homme', 'danny.gregory@example.com', '0663636363', 37, '8/7/1983', 'https://this-person-does-not-exist.com/img/avatar-gen11386f94e9ad946aa2167ef8ae3c617e.jpg', 'montagne', 'chill', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Carmen', 'Hayes', 'femme', 'carmen.hayes@example.com', '0663636358', 28, '12/5/1967', 'https://this-person-does-not-exist.com/img/avatar-gen7c2fc7dae93fb33e1c73bdbe73fd1cef.jpg', 'ville', 'actif', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Lucie', 'Colonval', 'femme', 'koda.lone@example.com', '0610101010', 25, '2/7/1999', 'https://this-person-does-not-exist.com/img/avatar-gen4a20ec46cf940d7e51003676b2897b15.jpg', 'sauvage', 'festif', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Patsy', 'Carter', 'femme', 'patsy.carter@example.com', '0652525252', 52, '10/7/1956', 'https://this-person-does-not-exist.com/img/avatar-gen11b9f87ff33a1c45444ab686eb348753.jpg', 'sauvage', 'culturel', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Carter', 'Howard', 'homme', 'carter.howard@example.com', '0663584307', 25, '1/1/1959', 'https://this-person-does-not-exist.com/img/avatar-gen2112e0288878e7de463089569e6589c0.jpg', 'ville', 'chill', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Harper', 'Wilson', 'femme', 'harper.wilson@example.com', '0658430575', 36, '4/3/1967', 'https://this-person-does-not-exist.com/img/avatar-gen8c85fa7e1aec6014263b2aff48a7dff3.jpg', 'montagne', 'actif', 'matin');

INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Eduardo', 'Mitchell', 'homme', 'eduardo.mitchell@example.com', '0663587307', 79, '3/4/1948', 'https://this-person-does-not-exist.com/img/avatar-gena729aeaafe294ac4b36d82ef3f0eb5d8.jpg', 'montagne', 'actif', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Sergio', 'Caldwell', 'homme', 'sergio.caldwell@example.com', '0666484307', 58, '10/1/1965', 'https://this-person-does-not-exist.com/img/avatar-gen116a55d32b1b10e15bc98d31e8932164.jpg', 'montagne', 'chill', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Joel', 'Ford', 'homme', 'joel.ford@example.com', '0661324307', 61, '6/3/1962', 'https://this-person-does-not-exist.com/img/avatar-gen11bafd760029bf2df8803b7abc34a2cf.jpg', 'plage', 'festif', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Jesus', 'Fletcher', 'homme', 'jesus.fletcher@example.com', '0663581237', 29, '3/7/1994', 'https://this-person-does-not-exist.com/img/avatar-genf5279b6e9db911d328ab7c65db989c3f.jpg', 'ville', 'culturel', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Virgil', 'Powell', 'homme', 'virgil.powell@example.com', '0615484307', 38, '2/7/1985', 'https://this-person-does-not-exist.com/img/avatar-gen20a65ba5abbbe9704884f0943360bbb5.jpg', 'sauvage', 'actif', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Vicki', 'Bradley', 'femme', 'vicki.bradley@example.com', '0663584333', 40, '3/6/1983', 'https://this-person-does-not-exist.com/img/avatar-gen114f3f979093b6bd4c413437d21a59ec.jpg', 'plage', 'festif', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Patsy', 'George', 'femme', 'patsy.george@example.com', '0660084307', 77, '11/6/1946', 'https://this-person-does-not-exist.com/img/avatar-gen5661705974b001b1d64490bd3c44d2f7.jpg', 'sauvage', 'chill', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Grace', 'Newman', 'femme', 'grace.newman@example.com', '0663114307', 45, '5/3/1978', 'https://this-person-does-not-exist.com/img/avatar-gen11c5d562cc67697140145823431dc543.jpg', 'montagne', 'culturel', 'matin');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Sally', 'Simpson', 'femme', 'sally.simpson@example.com', '0663284307', 55, '5/3/1968', 'https://this-person-does-not-exist.com/img/avatar-genc81cc254e0135a11c2f90ff1412a5df8.jpg', 'ville', 'chill', 'soir');
INSERT INTO profile(prenom,nom,genre,email,phone,age,dob,image_pr,critère_1,critère_2,critère_3) VALUES ('Lucas', 'Regret', 'homme', 'lucas.regret@example.com', '0663284507', 25, '15/3/1998', 'https://this-person-does-not-exist.com/img/avatar-gen119688ec6c369218d5f7cd8b1d9d3244.jpg', 'sauvage', 'chill', 'matin');