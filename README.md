# VintageMorocco

## Backend

Run `composer install` to install all the dependencies needed.

Duplicate `.env.example` file, rename it to `.env`.

Create an Database and customize MYSQL infos in the `.env` file (line 11).

Run `php artisan key:generate` to generate a secret key.

Run `php artisan migrate` to migrate all the needed tables to your db.

Finally, run `php artisan serve` to run the backend server.

Then Navigate to `http://localhost:8000/`.

## Frontend

Run `npm install` to install all the dependencies needed.

Run `ng serve` for a dev server.

Then Navigate to `http://localhost:4200/`.

## Dashboard

Run `npm install` to install all the dependencies needed.

Run `ng serve` for an admin  dev server.

Then Navigate to `http://localhost:42001/` or whichever url VSCode did chose for you.

### Enjoy!
