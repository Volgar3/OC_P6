# JustStreamIt : Projet OpenClassRooms n°6 

## Contexte 

Le site à pour but de regrouper les films ayant le plus gros score IMDB en intéragissant avec une API REST.

---

## Prérequis 

### 1/ Mise en place de l'API OCMOVIES

1. Cloner le dépôt : $ git clone https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR.git

2. Se positionner à la racine de l'API : ``` $ cd OCMOVIES-API-EN-FR ```

3. Créer un environnement virtuel : 

    - Linux et Mac : ```$ python3 -m venv env ```
    - Windows :  ```$ python -m venv env ```

4. Activer l'environnement virutel : 

    - Linux et Mac : ``` $ Source env/bin/activate ```
    - Windows :   ``` $ env/Scripts/activate ```

5. Installer les dépendances de l'API : ``` $ pip install -r requirements.txt ```

6. Créer et alimenter la base de données : ``` $ python manage.py create_db ```

7. Lancer le serveur : ``` $ python manage.py runserver ```

Pour plus d'informations sur l'API OCMOVIES : https://github.com/OpenClassrooms-Student-Center/OCMovies-API-EN-FR

### 2/ Mise en place du front-end

1. Cloner ce dépôt :  ``` $ git clone https://github.com/Volgar3/OC_P6.git ```

2. Se positionner à la racine du projet dans son IDE

3. Installer l'extension LiveServer avec Visual Studio Code

4. Une fois installé, Clique droit sur le fichier 'index.html' et cliquer sur l'option "Go live" (Si vous n'avez pas l'option, cliquer sur "Go live" en bas à droite de votre IDE)


Conception du front-end avec  les outils : JavaScript, HTML, CSS, Bootstrap
