using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.Data.Interfaces
{
    public interface IUserresponseRepository : IGetAll<Userresponse>,IGet<Userresponse,string>, ISave<Userresponse>, IUpdate<Userresponse, string>, IDelete<string>
    {
    }
}
