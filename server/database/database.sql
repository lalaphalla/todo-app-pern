CREATE TABLE product_category (
    category_id serial PRIMARY KEY,
    name text NOT NULL,
    description text NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);
CREATE TABLE user_account (
    user_id serial PRIMARY KEY,
    email varchar(50) NOT NULL,
    username varchar(50) NOT NULL,
    password varchar(60) NOT NULL,
    role varchar(50) NOT NULl,
    last_login timestamp,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    user_uid uuid UNIQUE NOT NULL
);
CREATE TABLE customer (
    customer_id serial PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    phone text NOT NULL,
    date_of_birth date NOT NULL,
    email text NOT NULL,
    image_url text NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    user_uid uuid REFERENCES user_account(user_uid)
);



CREATE TABLE instructor (
    instructor_id serial PRIMARY KEY,
    first_name text NOT NULL,
    last_name text NOT NULL,
    phone text NOT NULL,
    date_of_birth date NOT NULL,
    email text NOT NULL,
    image_url text NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL,
    user_uid uuid REFERENCES user_account(user_uid)
);

CREATE TABLE product (
    product_id serial PRIMARY KEY,
    instructor_id integer REFERENCES instructor(instructor_id),
    category_id integer REFERENCES product_category(category_id),
    name text NOT NULL,
    price numeric NOT NULL,
    description text NOT NULL,
    image_url text,
    quantity integer NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE purchased (
    purchased_id serial PRIMARY KEY,
    customer_id integer REFERENCES customer(customer_id),
    total numeric(6, 2),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE purchased_detail (
    purchased_detail_id serial PRIMARY KEY,
    purchased_id integer REFERENCES purchased(purchased_id),
    product_id integer REFERENCES product(product_id),
    total numeric(6, 2),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE customer_purchased_history (
    customer_purchased_history_id serial PRIMARY KEY,
    customer_id integer REFERENCES customer(customer_id),
    purchased_detail_id integer REFERENCES purchased_detail(purchased_detail_id),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE product_sale_history (
    product_sale_history_id serial PRIMARY KEY,
    product_id integer REFERENCES product(product_id),
    customer_id integer REFERENCES customer(customer_id),
    instructor_id integer REFERENCES instructor(instructor_id),
    purchased_detail_id integer REFERENCES purchased_detail(purchased_detail_id),
    is_delivered boolean NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE course (
    course_id serial PRIMARY KEY,
    instructor_id integer REFERENCES instructor(instructor_id),
    name text NOT NULL,
    description text NOT NULL,
    preview_video_url text NOT NULL,
    thumbnail_url text NOT NULL,
    duration interval NOT NULL,
    number_of_video int NOT NULL,
    course_objective text NOT NULL,
    price numeric NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE product_suggestion (
    product_suggestion_id serial PRIMARY KEY,
    course_id integer REFERENCES course(course_id),
    product_id integer REFERENCES product(product_id),
    instructor_id integer REFERENCES instructor(instructor_id),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE section (
    section_id serial PRIMARY KEY,
    instructor_id integer REFERENCES instructor(instructor_id),
    name text NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE lecture (
    lecture_id serial PRIMARY KEY,
    instructor_id integer REFERENCES instructor(instructor_id),
    name text NOT NULL,
    video_url text NOT NULL,
    duration interval NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE section_lecture (
    section_lecture_id serial PRIMARY KEY,
    lecture_id integer REFERENCES lecture(lecture_id),
    course_id integer REFERENCES course(course_id),
    instructor_id integer REFERENCES instructor(instructor_id),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE course_sale_history (
    course_sale_history_id serial PRIMARY KEY,
    customer_id integer REFERENCES customer(customer_id),
    course_id integer REFERENCES course(course_id),
    instructor_id integer REFERENCES instructor(instructor_id),
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE enroll (
    enroll_id serial PRIMARY KEY,
    customer_id integer REFERENCES customer(customer_id),
    course_id integer REFERENCES course(course_id),
    progress int NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);

CREATE TABLE product_image (
    product_image_id serial PRIMARY KEY,
    product_id integer REFERENCES product(product_id),
    image_url text NOT NULL,
    is_primary boolean NOT NULL,
    created_at timestamp NOT NULL,
    updated_at timestamp NOT NULL
);