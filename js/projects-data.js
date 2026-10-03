// Detailed project data and code snippets for Dina Salah Aldin Saber's Portfolio

const projectsData = [
  {
    id: "pharos-legacy",
    title: "Pharos Legacy",
    subtitle: "Egyptian Heritage & Tourism Booking Web Application",
    badge: "Team Project • Team Leader",
    category: ["aspnet", "sql", "lead"],
    image: "assets/images/pharos-hero.jpg",
    screenshots: [
      {
        url: "assets/images/pharos-hero.jpg",
        title: "Homepage & Exploration Hero",
        caption: "Main entry point with 'Discover The Pharaohs' Legacy' hero, live search bar, and primary navigation (Home, Pharaohs, Gods, Temples, Museums, Timeline)."
      },
      {
        url: "assets/images/pharos-pharaohs.jpg",
        title: "The Pharaohs & Dynasties Catalog",
        caption: "Interactive catalog exploring Egyptian pharaohs segmented by dynasty (19th, 18th, Ptolemaic) with search filters."
      },
      {
        url: "assets/images/pharos-museums.jpg",
        title: "Egyptian Museums & Ticket Pricing",
        caption: "Museum discovery section displaying Tahrir Square, Fustat, and Giza locations with direct ticket booking prices (100 EGP)."
      },
      {
        url: "assets/images/pharos-overview.jpg",
        title: "Full Page Journey Overview",
        caption: "Comprehensive page flow combining the exploration hero, pharaohs catalog, and museum listings in a cohesive Egyptian dark-gold theme."
      },
      {
        url: "assets/images/pharos-legacy.svg",
        title: "System Architecture & Admin Telemetry",
        caption: "Backend MVC architecture blueprint, ERD relationships, and Admin Dashboard tracking tourist counts and revenue."
      }
    ],
    shortDesc: "A full-featured tourism portal designed to promote Egyptian heritage by enabling users to explore ancient temples, museums, pharaohs, and historical timelines, complete with ticket bookings and revenue analytics.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "Entity Framework Core", "HTML5", "CSS3", "JavaScript"],
    erdHighlights: ["Tourists (1:N) Bookings", "Bookings (N:M) Monuments", "Tourists (N:M) Favorites", "Admins (1:N) ManagedEntities"],
    userFeatures: [
      "User registration, secure authentication, and profile management",
      "Interactive exploration of Egyptian temples, museums, pharaohs, and gods",
      "Historical chronological timeline of Egyptian dynasties",
      "Favorites collection for bookmarking monuments and historical figures",
      "Real-time ticket booking system with dynamic price calculation",
      "Self-service booking history and cancellation workflows",
      "Personalized tourist user dashboard"
    ],
    adminFeatures: [
      "Content Management: Add, edit, and remove temples and museums",
      "Curate historical gods, pharaoh profiles, and timeline milestones",
      "Registered user moderation and permission controls",
      "Ticket booking oversight and administrative cancellation capability",
      "Executive Analytics: Total tourist metrics and project revenue telemetry"
    ],
    dinaRole: [
      "Served as Team Leader: delegated milestones, conducted code integration, resolved merge conflicts, and presented the final project.",
      "Architected backend MVC structure: Controllers, ViewModels, and Data Models.",
      "Engineered Entity Framework Core Code-First data layer and relational schema.",
      "Implemented secure authentication, authorization roles, and session handling.",
      "Built user dashboard and favorites logic with asynchronous database updates."
    ],
    databaseNotes: "Normalized 3NF relational database in SQL Server modeling tourist accounts, ticket inventory, booking transactions, and monument metadata."
  },
  {
    id: "stay-ease",
    title: "Stay Ease",
    subtitle: "Enterprise Hotel Management & Multi-Gateway Reservation System",
    badge: "Team Project • Team Leader",
    category: ["aspnet", "sql", "lead"],
    image: "assets/images/stay-ease-hero.jpg",
    screenshots: [
      {
        url: "assets/images/stay-ease-hero.jpg",
        title: "Hotel Search & Explore Destinations",
        caption: "Find your perfect stay in Egypt: dynamic destination search with live cards for Nile View Hotel in Cairo, Red Sea Resort in Alexandria, and Pyramids Plaza in Luxor."
      },
      {
        url: "assets/images/stay-ease-rooms.jpg",
        title: "Room Selection & Instant Booking",
        caption: "Nile View Hotel room tier selection (Single Room $50, Double Room $90, Family Suite $150) and booking reservation form with check-in, check-out dates, and payment options."
      },
      {
        url: "assets/images/stay-ease-flow.jpg",
        title: "Full Booking Experience Flow",
        caption: "End-to-end guest reservation journey from search discovery to room tier checkout."
      },
      {
        url: "assets/images/stay-ease.svg",
        title: "System Architecture & Payment Simulation",
        caption: "Multi-gateway payment simulation architecture (PayPal, InstaPay, VCash, cash at hotel), room availability calendars, and ERD schema."
      }
    ],
    shortDesc: "An all-in-one hotel management system enabling travelers to find hotels, filter rooms by city/price/rating, make real-time reservations, and simulate multi-channel online payments.",
    technologies: ["ASP.NET Core MVC", "C#", "SQL Server", "EF Core", "HTML5", "CSS3", "JavaScript"],
    erdHighlights: ["Hotels (1:N) Rooms", "Rooms (1:N) Reservations", "Guests (1:N) Reviews", "Reservations (1:1) PaymentReceipts"],
    userFeatures: [
      "User authentication, profile management, and reservation history",
      "Dynamic hotel search with multi-faceted filtering (City, Price range, Star ratings)",
      "Room category browsing (Executive, Deluxe, Standard) with real-time availability",
      "Date-range picker for reservation check-in and check-out",
      "Reservation modification and instant cancellation workflows",
      "Simulated Multi-Gateway Online Checkout (PayPal, InstaPay, VCash) & Cash-on-Arrival",
      "Verified guest rating and review publishing system",
      "Saved favorite hotels list"
    ],
    adminFeatures: [
      "Hotel & room inventory administration with pricing adjustments",
      "Reservation tracking, check-in validation, and room status updates",
      "Guest oversight, review moderation, and occupancy rate reporting"
    ],
    dinaRole: [
      "Served as Team Leader: coordinated sprint tasks, facilitated problem-solving, and delivered technical presentations.",
      "Designed and normalized relational database schema (ERD) in SQL Server.",
      "Implemented core booking transactions and date-collision validation in C# ASP.NET Core.",
      "Developed simulated payment gateway workflows supporting multiple channels.",
      "Built hotel filtering API with optimized SQL queries and Entity Framework Core."
    ],
    databaseNotes: "Engineered relational schema preventing double-booking room conflicts through SQL date range overlap checks and transaction locks."
  },
  {
    id: "zucchini-store",
    title: "Zucchini Store",
    subtitle: "Retail Inventory & Apparel Store Management System",
    badge: "Team Project • Team Leader",
    category: ["sql", "lead"],
    image: "assets/images/zucchini-store.svg",
    screenshots: [
      {
        url: "assets/images/zucchini-store.svg",
        title: "Retail Inventory & Department Management",
        caption: "Apparel catalog segmented into Women, Men, and Children with real-time stock levels and automated low-stock restock alerts."
      }
    ],
    shortDesc: "A complete retail store management system engineered in Microsoft Access, providing multi-department inventory control, automated restocking alerts, and sales performance reporting for women's, men's, and children's collections.",
    technologies: ["Microsoft Access", "Relational SQL", "Database Design", "UI Forms & Reports"],
    erdHighlights: ["Categories (1:N) Products", "Suppliers (1:N) RestockOrders", "Orders (1:N) OrderDetails", "Products (1:N) InventoryLogs"],
    userFeatures: [
      "Apparel catalog segmented into Women, Men, and Children departments",
      "Product lookup with pricing, size variation, and real-time stock levels",
      "Cashier order entry and customer receipt generation"
    ],
    adminFeatures: [
      "Stock inventory management with real-time stock quantity monitoring",
      "Automated low-stock threshold triggers and restocking purchase order generation",
      "Supplier management and vendor reorder history",
      "Store performance analytics and sales reporting interfaces"
    ],
    dinaRole: [
      "Team Leader: allocated responsibilities, established project timelines, and coordinated milestone deliverables.",
      "Designed relational database architecture: tables, keys, cascade rules, and validation checks.",
      "Built user forms, navigation flows, and database management interfaces.",
      "Authored complex SQL queries for stock audits and restocking notifications."
    ],
    databaseNotes: "Structured normalized relational tables enforcing referential integrity across product SKUs, supplier ledgers, and transactions."
  }
];

// Interactive Database Code Snippets
const databaseSnippets = {
  pharos: {
    title: "Pharos Legacy • Ticket Booking Stored Procedure",
    tech: "Transact-SQL (T-SQL) • SQL Server",
    description: "Production-ready Stored Procedure demonstrating ACID transaction management, seat/ticket quota verification, and atomic balance updating.",
    code: `-- ========================================================
-- Stored Procedure: sp_BookTourTicket
-- Author: Dina Salah Aldin Saber
-- Project: Pharos Legacy (ASP.NET Core MVC Backend)
-- Description: Executes atomic booking with ticket capacity check
-- ========================================================
CREATE PROCEDURE dbo.sp_BookTourTicket
    @TouristId       INT,
    @MonumentId      INT,
    @VisitDate       DATE,
    @TicketCount     INT,
    @TicketType      VARCHAR(20),     -- 'Adult' or 'Student'
    @CalculatedTotal DECIMAL(10,2),
    @BookingId       INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    SET XACT_ABORT ON;

    BEGIN TRY
        BEGIN TRANSACTION;

        -- 1. Validate Monument Existence and Availability
        DECLARE @MaxDailyCapacity INT, @CurrentBooked INT, @UnitPrice DECIMAL(10,2);
        
        SELECT 
            @MaxDailyCapacity = m.DailyCapacity,
            @UnitPrice = CASE 
                WHEN @TicketType = 'Student' THEN m.StudentTicketPrice
                ELSE m.AdultTicketPrice
            END
        FROM dbo.Monuments m
        WHERE m.MonumentId = @MonumentId;

        IF @UnitPrice IS NULL
        BEGIN
            RAISERROR('Monument not found or invalid ticket type.', 16, 1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

        -- 2. Count existing reservations for this visit date
        SELECT @CurrentBooked = ISNULL(SUM(b.TicketQuantity), 0)
        FROM dbo.Bookings b
        WHERE b.MonumentId = @MonumentId 
          AND b.VisitDate = @VisitDate
          AND b.BookingStatus <> 'Cancelled';

        -- 3. Check capacity quota
        IF (@CurrentBooked + @TicketCount) > @MaxDailyCapacity
        BEGIN
            RAISERROR('Capacity exceeded for selected visit date.', 16, 1);
            ROLLBACK TRANSACTION;
            RETURN;
        END

        -- 4. Insert Confirmed Booking Record
        INSERT INTO dbo.Bookings (
            TouristId, MonumentId, VisitDate, TicketQuantity,
            TicketType, TotalAmount, BookingStatus, CreatedAt
        )
        VALUES (
            @TouristId, @MonumentId, @VisitDate, @TicketCount,
            @TicketType, (@TicketCount * @UnitPrice), 'Confirmed', GETDATE()
        );

        SET @BookingId = SCOPE_IDENTITY();

        -- 5. Audit Log Entry for Admin Analytics
        INSERT INTO dbo.AuditLogs (ActionType, TargetEntity, RecordId, PerformedBy, LoggedAt)
        VALUES ('TICKET_BOOKED', 'Bookings', @BookingId, @TouristId, GETDATE());

        COMMIT TRANSACTION;
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;

        DECLARE @ErrorMessage NVARCHAR(4000) = ERROR_MESSAGE();
        DECLARE @ErrorSeverity INT = ERROR_SEVERITY();
        RAISERROR(@ErrorMessage, @ErrorSeverity, 1);
    END CATCH
END;`
  },

  stayEase: {
    title: "Stay Ease • Hotel Performance & City Revenue Aggregates",
    tech: "Transact-SQL (T-SQL) • SQL Server",
    description: "Advanced analytical query utilizing multi-table INNER/LEFT JOINs, aggregate functions, GROUP BY, and HAVING clauses to compute hotel occupancy metrics.",
    code: `-- ========================================================
-- Advanced Analytical SQL Query
-- Author: Dina Salah Aldin Saber
-- Project: Stay Ease Hotel Management System
-- Purpose: Aggregate revenue, average star rating, and booking volume
--          Filter top-performing hotel clusters using GROUP BY / HAVING
-- ========================================================
SELECT 
    h.HotelId,
    h.HotelName,
    h.City,
    h.StarRating,
    COUNT(DISTINCT r.RoomId) AS TotalRooms,
    COUNT(b.BookingId) AS CompletedBookings,
    ISNULL(AVG(CAST(rev.RatingScore AS DECIMAL(3,2))), 0.0) AS AvgCustomerRating,
    ISNULL(SUM(p.PaymentAmount), 0.00) AS TotalNetRevenue,
    CASE 
        WHEN AVG(rev.RatingScore) >= 4.5 THEN 'Exceptional (SuperHost)'
        WHEN AVG(rev.RatingScore) >= 4.0 THEN 'High Performer'
        ELSE 'Standard Service'
    END AS PerformanceTier
FROM dbo.Hotels h
INNER JOIN dbo.Rooms r 
    ON h.HotelId = r.HotelId
LEFT JOIN dbo.Bookings b 
    ON r.RoomId = b.RoomId 
    AND b.ReservationStatus = 'Completed'
LEFT JOIN dbo.Payments p 
    ON b.BookingId = p.BookingId 
    AND p.PaymentStatus = 'Success'
LEFT JOIN dbo.CustomerReviews rev 
    ON h.HotelId = rev.HotelId
WHERE h.IsActive = 1
GROUP BY 
    h.HotelId,
    h.HotelName,
    h.City,
    h.StarRating
HAVING 
    COUNT(b.BookingId) >= 5               -- Only hotels with proven volume
    AND ISNULL(SUM(p.PaymentAmount), 0) > 10000 -- Revenue threshold filter
ORDER BY 
    TotalNetRevenue DESC, 
    AvgCustomerRating DESC;`
  },

  zucchini: {
    title: "Zucchini Store • Automated Inventory Restock Trigger",
    tech: "Transact-SQL / Relational Schema",
    description: "Event-driven Database Trigger automatically auditing remaining stock on order insertion and alerting management when minimum thresholds are reached.",
    code: `-- ========================================================
-- Database Trigger: trg_AuditStockAndRestockAlert
-- Author: Dina Salah Aldin Saber
-- Project: Zucchini Store Management System
-- Description: Decrements inventory upon sale and triggers low-stock alerts
-- ========================================================
CREATE TRIGGER trg_AuditStockAndRestockAlert
ON dbo.OrderDetails
AFTER INSERT
AS
BEGIN
    SET NOCOUNT ON;

    -- 1. Deduct sold quantity from the main product stock
    UPDATE p
    SET 
        p.StockQuantity = p.StockQuantity - i.QuantitySold,
        p.LastUpdated = GETDATE()
    FROM dbo.Products p
    INNER JOIN inserted i ON p.ProductId = i.ProductId;

    -- 2. Detect products falling below safety reorder threshold
    INSERT INTO dbo.RestockAlerts (
        ProductId, 
        CurrentStock, 
        ReorderLevel, 
        AlertDate, 
        AlertStatus
    )
    SELECT 
        p.ProductId,
        p.StockQuantity,
        p.ReorderThreshold,
        GETDATE(),
        'Pending_Order'
    FROM dbo.Products p
    INNER JOIN inserted i ON p.ProductId = i.ProductId
    WHERE p.StockQuantity <= p.ReorderThreshold
      AND NOT EXISTS (
          -- Avoid creating duplicate pending alerts
          SELECT 1 FROM dbo.RestockAlerts ra 
          WHERE ra.ProductId = p.ProductId 
            AND ra.AlertStatus = 'Pending_Order'
      );
END;`
  },

  efcore: {
    title: "ASP.NET Core MVC • Async Controller & LINQ Integration",
    tech: "C# • ASP.NET Core MVC • Entity Framework Core",
    description: "Production controller action implementing dependency injection, asynchronous queries with async/await, validation, and error handling.",
    code: `// ========================================================
// Controller: BookingsController.cs
// Author: Dina Salah Aldin Saber
// Project: Pharos Legacy & Stay Ease Core Backend
// Pattern: ASP.NET Core MVC + Entity Framework Core
// ========================================================
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PharosLegacy.Data;
using PharosLegacy.Models;
using PharosLegacy.ViewModels;

namespace PharosLegacy.Controllers
{
    [Authorize]
    public class BookingsController : Controller
    {
        private readonly ApplicationDbContext _context;
        private readonly ILogger<BookingsController> _logger;

        public BookingsController(ApplicationDbContext context, ILogger<BookingsController> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(logger));
        }

        // GET: /Bookings/Create?monumentId=5
        [HttpGet]
        public async Task<IActionResult> Create(int monumentId)
        {
            var monument = await _context.Monuments
                .AsNoTracking()
                .FirstOrDefaultAsync(m => m.Id == monumentId);

            if (monument == null)
            {
                _logger.LogWarning("Booking requested for non-existent Monument ID: {Id}", monumentId);
                return NotFound("Selected heritage site could not be found.");
            }

            var viewModel = new BookingCreateViewModel
            {
                MonumentId = monument.Id,
                MonumentName = monument.Name,
                AdultPrice = monument.AdultPrice,
                StudentPrice = monument.StudentPrice,
                VisitDate = DateTime.Today.AddDays(1)
            };

            return View(viewModel);
        }

        // POST: /Bookings/Create
        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Create(BookingCreateViewModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            // Current logged-in user identification
            var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;
            if (string.IsNullOrEmpty(userId))
            {
                return Unauthorized();
            }

            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                // Validate availability quota using LINQ
                var existingTickets = await _context.Bookings
                    .Where(b => b.MonumentId == model.MonumentId 
                             && b.VisitDate.Date == model.VisitDate.Date
                             && b.Status != BookingStatus.Cancelled)
                    .SumAsync(b => b.TicketCount);

                var monument = await _context.Monuments.FindAsync(model.MonumentId);
                if (existingTickets + model.TicketCount > monument.DailyCapacity)
                {
                    ModelState.AddModelError("", "Sorry, daily capacity for this monument has been reached.");
                    return View(model);
                }

                var booking = new Booking
                {
                    TouristId = userId,
                    MonumentId = model.MonumentId,
                    VisitDate = model.VisitDate,
                    TicketCount = model.TicketCount,
                    TicketType = model.TicketType,
                    TotalAmount = model.CalculateTotal(monument.AdultPrice, monument.StudentPrice),
                    Status = BookingStatus.Confirmed,
                    CreatedAt = DateTime.UtcNow
                };

                _context.Bookings.Add(booking);
                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                _logger.LogInformation("Booking #{BookingId} created successfully for User {UserId}", booking.Id, userId);
                TempData["SuccessMessage"] = "Your visit ticket was successfully booked!";

                return RedirectToAction(nameof(Confirmation), new { id = booking.Id });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                _logger.LogError(ex, "Error processing booking for Monument ID {MonumentId}", model.MonumentId);
                ModelState.AddModelError("", "An unexpected error occurred while booking. Please try again.");
                return View(model);
            }
        }
    }
}`
  }
};
