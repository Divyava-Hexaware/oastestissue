using netwithmongo.Data.Interfaces;
using netwithmongo.BusinessEntities.Entities;
using MongoDB.Bson;
using MongoDB.Driver;
using MongoDB.Driver.Core.Bindings;
using System;
using System.Collections.Generic;
using System.Text;

namespace netwithmongo.Data.Repositories
{
    public class UserresponseRepository : IUserresponseRepository
    {
        private readonly IGateway _gateway;
        private readonly string _collectionName = "Userresponse";

        public UserresponseRepository(IGateway gateway)
        {
            _gateway = gateway;
        }
        public IEnumerable<Userresponse> GetAll()
        {
            var result = _gateway.GetMongoDB().GetCollection<Userresponse>(_collectionName)
                            .Find(new BsonDocument())
                            .ToList();
            return result;
        }

        public Userresponse Get(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<Userresponse>(_collectionName)
                            .Find(x => x.Id == id).Single();
            return result;
        }

        public bool Save(Userresponse entity)
        {
            _gateway.GetMongoDB().GetCollection<Userresponse>(_collectionName)
                .InsertOne(entity);
            return true;
        }

        public Userresponse Update(string id, Userresponse entity)
        {
            var update = Builders<Userresponse>.Update
                .Set(e => e.UserId, entity.UserId )
                .Set(e => e.WritingCode, entity.WritingCode )
                .Set(e => e.NameId, entity.NameId )
                .Set(e => e.MemberId, entity.MemberId )
                .Set(e => e.Member, entity.Member )
                .Set(e => e.UserName, entity.UserName )
                .Set(e => e.Email, entity.Email )
                .Set(e => e.SecretImage, entity.SecretImage )
                .Set(e => e.SecretImageAltText, entity.SecretImageAltText )
                .Set(e => e.LoginAttempt, entity.LoginAttempt )
                .Set(e => e.ResetGuid, entity.ResetGuid )
                .Set(e => e.Url, entity.Url )
                .Set(e => e.IsValidUser, entity.IsValidUser )
                .Set(e => e.Phone, entity.Phone )
                .Set(e => e.HasAcceptedEula, entity.HasAcceptedEula )
                .Set(e => e.PreferedContactMethod, entity.PreferedContactMethod )
                .Set(e => e.PatientId, entity.PatientId )
                .Set(e => e.NPN, entity.NPN )
                .Set(e => e.Broker, entity.Broker )
                .Set(e => e.FirstName, entity.FirstName )
                .Set(e => e.LastName, entity.LastName )
                .Set(e => e.Agency, entity.Agency );

            var result = _gateway.GetMongoDB().GetCollection<Userresponse>(_collectionName)
                .FindOneAndUpdate(e => e.Id == id, update);
            return result;
        }

        public bool Delete(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<Userresponse>(_collectionName)
                         .FindOneAndDelete(e => e.Id == id);
            if(result==null) return false;             
            return true;
        }
    }
}
