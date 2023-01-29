#include <iostream>

using namespace std;

int main()
{
    int a, b, operatie;

    cout << "a = ";

    //cin - citeste de la tastatura
    cin >> a;

    cout << "b = ";
    cin >> b;

    cout<< "alege o operatie: " << "\n";
    cout << "1. +" << "\n";
    cout << "2. -" << "\n";
    cout << "3. *" << "\n";
    cout << "4. /" << "\n";
    cout << "5. %" << "\n";

    cin>> operatie;

//    if(operatie == 1) {
//        cout<< a+b;
//    }
//    else if(operatie == 2) {
//        cout<< a-b;
//    }
//     else if(operatie == 3) {
//        cout<< a*b;
//    }
//     else if(operatie == 4) {
//        cout<< a/b;
//    }
//     else if(operatie == 5) {
//        cout<< a%b;
//    }

    switch(operatie) {
        case 1:
            cout<< a+b;
            break;
        case 2:
            cout<< a-b;
             break;
        case 3:
            cout<< a*b;
            break;
        case 4:
            cout<< a/b;
             break;
        case 5:
            cout<< a%b;
             break;
        default:
            cout << "nu exista aceasta operatie";
    }


    return 0;
}
