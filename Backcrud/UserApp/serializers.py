
from rest_framework import serializers
from UserApp.models import Users

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=Users
        fields=('User_id','First_name','Last_name','Email','Cin','Password','Role')