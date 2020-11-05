using System;
using Domain;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
            
        }

        public DbSet<Value> Values {get; set;}

        // add hard code value to insert to values in to the db table during migration
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
            .HasData(
              new Value{ Id = 1, Name="Values 101"},
              new Value{ Id = 2, Name = "Value 102"},
              new Value{ Id = 3, Name = "Value 103"}  
            );
        }
    }
}
