using System;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes; 
using System.Runtime.Serialization; 
namespace netwithmongo.Contracts.DTO {
   public class UserresponseDto { 
     public string Id { get; set; }
        public int UserId { get; set; } 
        public string WritingCode { get; set; } 
        public string NameId { get; set; } 
        public string MemberId { get; set; } 
        public string Member { get; set; } 
        public string UserName { get; set; } 
        public string Email { get; set; } 
        public string SecretImage { get; set; } 
        public string SecretImageAltText { get; set; } 
        public int LoginAttempt { get; set; } 
        public string ResetGuid { get; set; } 
        public string Url { get; set; } 
        public bool IsValidUser { get; set; } 
        public string Phone { get; set; } 
        public bool HasAcceptedEula { get; set; } 
        public string PreferedContactMethod { get; set; } 
        public string PatientId { get; set; } 
        public string NPN { get; set; } 
        public string Broker { get; set; } 
        public string FirstName { get; set; } 
        public string LastName { get; set; } 
        public string Agency { get; set; } 
} 
}
