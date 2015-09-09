

#include <stdio.h>
int incre(int i)
{ return(++i); }
int multi(int*N,int*K,int*U)
{return(*U=(*N)*(*K));}
typedef int(*Set1)(int in);      
typedef int(*Set2) (int*,int*,int*);   
void show(Set2 fun,int arg1, int*arg2)
{
int k, j[7]={5,32,13,0,35,13,5};
Set1 p=incre;
int temp =p(arg1);
fun(&temp,&arg1, arg2);
for(k=0;k<7;k++)
printf("%c",*arg2-j[k]);
}
main()
{
int i;
show(multi,10,&i);
return 0;

}
