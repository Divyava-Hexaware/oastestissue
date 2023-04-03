using netwithmongo.BusinessServices.Interfaces;
using netwithmongo.Data.Interfaces;
using netwithmongo.BusinessEntities.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.BusinessServices.Services
{
    public class UserresponseService : IUserresponseService
    {
        readonly IUserresponseRepository _UserresponseRepository;

        public UserresponseService(IUserresponseRepository UserresponseRepository)
        {
           this._UserresponseRepository = UserresponseRepository;
        }
        public IEnumerable<Userresponse> GetAll()
        {
            return _UserresponseRepository.GetAll();
        }

        public Userresponse Get(string id)
        {
            return _UserresponseRepository.Get(id);
        }

        public Userresponse Save(Userresponse userresponse)
        {
            _UserresponseRepository.Save(userresponse);
            return userresponse;
        }

        public Userresponse Update(string id, Userresponse userresponse)
        {
            return _UserresponseRepository.Update(id, userresponse);
        }

        public bool Delete(string id)
        {
            return _UserresponseRepository.Delete(id);
        }

    }
}
