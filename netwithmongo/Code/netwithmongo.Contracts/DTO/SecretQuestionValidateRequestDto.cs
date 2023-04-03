using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 
using System.Runtime.Serialization; 
namespace netwithmongo.Contracts.DTO {
   public class SecretQuestionValidateRequestDto { 
     public string Id { get; set; }
        public int UserId { get; set; } 
        public int SecretQuestionId { get; set; } 
        public string Answer { get; set; } 
} 
}
