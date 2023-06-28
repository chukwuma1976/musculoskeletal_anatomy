Welcome to Musculoskeletal Anatomy for Exercise

This application focuses on muscular and skeletal anatomy.  It provides information about the pertinent muscles involved in physical activity and the skeletal structure that supports them.

There are five main parts to this application.

1. Home page
    
The user can be redirected to the other parts of the application.

2. Muscles

This consists of an interactive table that displays comprehensive information about the muscles involved in physical 
activity.  Each row of the table contains an image which can be enlarged by clicking on the thumbnail.  The image will be displayed as a popup.  The user can select muscles by body part or search by name.  The user can edit or delete the information in each row of the table.

3. Bones

This consists of an interactive table that displays comprehensive information about the bones which support our muscles.  Each row of the table contains an image which can be enlarged by clicking on the thumbnail.  The image will be displayed as a popup.  The user can select bones by region or search by name.  The user can edit or delete the information in each row of the table.

4. Add a muscle

This section allows the user to add a new muscle to the table.  Furthermore, the user can add a new body part and even add a new muscle to that body part.  There is also the option to remove a body part.  The user can still add a muscle to various parts of the body using the provided dropdown list.

5. Add a bone

This section allows the user to add a new bone to the table.  Furthermore, the user can add a new region and even add a new bone to that region.  There is also the option to remove a region.  The user can still add a bone to various regions of the body using the provided dropdown list.

To launch this application:

    git clone git@github.com:chukwuma1976/musculoskeletal_anatomy.git
    cd musculoskeletal_anatomy

    cd musculoskeletal-server 
    bundle install
    rails s //this allows the application to run on a single local server

    To run deployed application: https://musculoskeletal-anatomy.onrender.com/

    make sure PostgreSQL is installed and started
        sudo apt update
        sudo apt install postgresql postgresql-contrib libpq-dev
        psql --version //confirm installation
        sudo service postgresql start //starts the postgresql server
        whoami //checks user
        sudo -u postgres -i
        createuser -sr <username>    

Link to the demo for this application: https://youtu.be/qwmenLGOq7k

Images were obtained from the internet via google.com.

The information for these muscles and bones is widely available on the internet.  However, I specifically obtained the information from https://anatomy.elpaso.ttuhsc.edu/anatomytables/muscles.html and https://anatomy.elpaso.ttuhsc.edu/anatomytables/bones.html.