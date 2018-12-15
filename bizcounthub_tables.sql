-- Table: public.cstb_business_plan

-- DROP TABLE public.cstb_business_plan;

CREATE TABLE public.cstb_business_plan
(
  id serial primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  description text,
  name text
);

-- Table: public.cstb_business_plan_feature

-- DROP TABLE public.cstb_business_plan_feature;

CREATE TABLE public.cstb_business_plan_feature
(
  id serial primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  business_plan_id integer,
  feature_name text,
  seq_no integer
);

-- Table: public.cstm_country

-- DROP TABLE public.cstm_country;

CREATE TABLE public.cstm_country
(
  country_code text,
  country_name text,
  currency text,
  img_flag text,
  iso_code text,
  language text,
  latitude bigint,
  longitude bigint
);

-- Table: public.cstm_store

-- DROP TABLE public.cstm_store;

CREATE TABLE public.cstm_store
(
  id text primary key default uuid_generate_v4(),
  name text,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  address_line1 text,
  address_line2 text,
  address_line3 text,
  address_line4 text,
  country_code text,
  api_auth_type text,
  api_password text,
  api_url text,
  api_username text,
  img_banner text,
  img_logo text,
  img_cover text,
  img_profile text,
  description text,
  email text,
  latitude bigint,
  longitude bigint,
  mobile_phone text,
  telephone text,
  parent_id text,
  phone1 text,
  phone2 text,
  phone3 text,
  phone4 text,
  social_id text,
  social_type text,
  username text,
  web_url text
);

-- Table: public.cstm_store_category

-- DROP TABLE public.cstm_store_category;
CREATE SEQUENCE public.cstm_store_category_id_seq;
CREATE TABLE public.cstm_store_category
(
  id bigint NOT NULL DEFAULT nextval('cstm_store_category_id_seq'::regclass) primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  category_id bigint,
  store_id text
);

-- Table: public.cstm_product_category

-- DROP TABLE public.cstm_product_category;
CREATE SEQUENCE public.cstm_product_category_id_seq;

CREATE TABLE public.cstm_product_category
(
  id bigint NOT NULL DEFAULT nextval('cstm_product_category_id_seq'::regclass) primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  category_id integer,
  product_id bigint
);

-- Table: public.cstm_user_store

-- DROP TABLE public.cstm_user_store;

CREATE TABLE public.cstm_user_store
(
  id bigint serial primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  is_default boolean,
  is_last_visit boolean,
  store_id text,
  user_id bigint
);

-- Table: public.sttm_product

-- DROP TABLE public.sttm_product;

CREATE TABLE public.sttm_product
(
  id text primary key default uuid_generate_v4(),
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  image text,
  store_id text
);

-- Table: public.sttm_product_desc

-- DROP TABLE public.sttm_product_desc;

CREATE SEQUENCE public.sttm_product_desc_id_seq;

CREATE TABLE public.sttm_product_desc
(
  id bigint NOT NULL DEFAULT nextval('sttm_product_desc_id_seq'::regclass) primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  description text,
  language_id integer,
  name text,
  tag text,
  product_id text
);

-- Table: public.sttm_product_discount

-- DROP TABLE public.sttm_product_discount;
CREATE SEQUENCE public.sttm_product_discount_id_seq
  START 10000000

CREATE TABLE public.sttm_product_discount
(
  id bigint NOT NULL DEFAULT nextval('sttm_product_discount_id_seq'::regclass) primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  from_date timestamp without time zone,
  is_expired boolean,
  to_date timestamp without time zone,
  discount_detail_id bigint,
  product_id bigint
);

-- Table: public.cstm_product_category

-- DROP TABLE public.cstm_product_category;
CREATE SEQUENCE public.cstm_product_category_id_seq;

CREATE TABLE public.cstm_product_category
(
  id bigint NOT NULL DEFAULT nextval('cstm_product_category_id_seq'::regclass) primary key,
  create_at timestamp without time zone,
  create_by text,
  update_by text,
  update_at timestamp without time zone,
  record_status text,
  status text,
  category_id integer,
  product_id bigint
);

-- Table: public.sttm_category

-- DROP TABLE public.sttm_category;

CREATE TABLE public.sttm_category
(
    id serial primary key,
    create_at timestamp without time zone,
    create_by text,
    update_by text,
    update_at timestamp without time zone,
    record_status text,
    status text,
    img text,
    parent_id integer,
    seq_no integer,
    fa_icon text COLLATE pg_catalog."default" DEFAULT 'fa fa-home'::text
);

-- Table: public.sttm_category_desc

-- DROP TABLE public.sttm_category_desc;

CREATE TABLE public.sttm_category_desc
(
    id serial primary key,
    create_at timestamp without time zone,
    create_by text,
    update_by text,
    update_at timestamp without time zone,
    record_status text,
    status text,
    category_id integer,
    description text,
    language_id integer,
    meta_description text,
    meta_keyword text,
    meta_title text,
    name text
);