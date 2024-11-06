# Practico3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## BDD Tests

cd into the `bdd-tests` directory and install the required dependencies:

Run `python -m behave` to run the BDD tests.

python -m behave features/registro_cliente.feature
python -m behave features/registro_venta.feature

## Configure xampp to host generated build

1. Configure port to 3000 in xampp/apache/conf/httpd.conf
2. Enable the following modules in [xampp-installation-directory]\apache\conf\httpd.conf

```
proxy_http_module
rewrite_module
deflate_module
headers_module
proxy_connect_module
proxy_html_module
```

3. At the end of httpd.conf add the following lines
```
<Proxy *>
    Order Allow,Deny
    Allow from all
</Proxy>
```
