using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.BusinessServices.Interfaces
{
    public interface IUserresponseService
    {      
        IEnumerable<Userresponse> GetAll();
        Userresponse Get(string id);
        Userresponse Save(Userresponse userresponse);
        Userresponse Update(string id, Userresponse userresponse);
        bool Delete(string id);

    }
}
