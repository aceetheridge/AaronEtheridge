using System;
using System.Linq;
using System.Collections.Generic;

public class Program
{
    public static void Main()
    {
        List<string> names = new List<string>();
        names.Add("Vasti");
        names.Add("Cameron");
        names.Add("Ezra");
        names.Add("Tilly");
        bool program = false;
        bool program2 = false;
        Console.WriteLine("Welcome to the names lost! If you wish to add 
        a name to the list, type 1. If you want to see current names in 
        the list, 
        type 2.");
        string userChoice = Console.ReadLine();
        do
        {
            switch (userChoice)
            {
                case "1":
                    Console.WriteLine("Add a name to the squad.");
                    string userAddName = Console.ReadLine();
                    names.Add(userAddName);
                    break;
                case "2":
                    Console.WriteLine("Here's the list:");
                    foreach (string name in names)
                    {
                        Console.WriteLine(name);
                     }

                    Console.WriteLine("Wanna do that again? Type yes or 
                    no.");
                    do
                        {
                    string userContinue = Console.ReadLine();

                        switch (userContinue)
                        {
                            case "yes":
                                program = true;
                                program2 = false;
                                break;
                            case "Yes":
                                program = true;
                                program2 = false;
                                break;
                            case "no":
                                program = false;
                                program2 = false;
                                break;
                            case "No":
                                program = false;
                                program2 = false;
                                break;
                            default:
                                Console.WriteLine("Please enter either  
                                yes or no");
                                userContinue = Console.ReadLine();
                                program2 = true;
                                break;
                        }

                    }
                    while (program2 == true);

                    break;
                default:
                    Console.WriteLine("Please type either 1 or 2 to 
                    select an option.");
                    break;
            }
        }
        while (program == true);
    }
}