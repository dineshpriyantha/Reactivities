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
        public DbSet<Activity> Activities {get; set;}

        // add hard code value to insert to values in to the db table during migration
        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
            .HasData(
              new Value{ Id = 1, Name = "Value 10441"},
              new Value{ Id = 2, Name = "Value 10452"},
              new Value{ Id = 3, Name = "Value 10883"},
              new Value{ Id = 4, Name = "Value 105444"} 
            );
        }
    }
}
