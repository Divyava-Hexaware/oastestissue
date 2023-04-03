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
    public class SecretQuestionValidateRequestRepository : ISecretQuestionValidateRequestRepository
    {
        private readonly IGateway _gateway;
        private readonly string _collectionName = "SecretQuestionValidateRequest";

        public SecretQuestionValidateRequestRepository(IGateway gateway)
        {
            _gateway = gateway;
        }
        public IEnumerable<SecretQuestionValidateRequest> GetAll()
        {
            var result = _gateway.GetMongoDB().GetCollection<SecretQuestionValidateRequest>(_collectionName)
                            .Find(new BsonDocument())
                            .ToList();
            return result;
        }

        public SecretQuestionValidateRequest Get(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<SecretQuestionValidateRequest>(_collectionName)
                            .Find(x => x.Id == id).Single();
            return result;
        }

        public bool Save(SecretQuestionValidateRequest entity)
        {
            _gateway.GetMongoDB().GetCollection<SecretQuestionValidateRequest>(_collectionName)
                .InsertOne(entity);
            return true;
        }

        public SecretQuestionValidateRequest Update(string id, SecretQuestionValidateRequest entity)
        {
            var update = Builders<SecretQuestionValidateRequest>.Update
                .Set(e => e.UserId, entity.UserId )
                .Set(e => e.SecretQuestionId, entity.SecretQuestionId )
                .Set(e => e.Answer, entity.Answer );

            var result = _gateway.GetMongoDB().GetCollection<SecretQuestionValidateRequest>(_collectionName)
                .FindOneAndUpdate(e => e.Id == id, update);
            return result;
        }

        public bool Delete(string id)
        {
            var result = _gateway.GetMongoDB().GetCollection<SecretQuestionValidateRequest>(_collectionName)
                         .FindOneAndDelete(e => e.Id == id);
            if(result==null) return false;             
            return true;
        }
    }
}
