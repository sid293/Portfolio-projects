#! /usr/bin/bash 
echo "hellow world"
variable="FIRST"
read namo
if [ $namo ];then
	echo "$namo sounds good"
else 
	echo "you need to put your name"
fi
echo "your variable is $variable "
echo $(ls -l)
