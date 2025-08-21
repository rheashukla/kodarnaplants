import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Sun, Cloud, TreePine } from 'lucide-react';

const InteractivePlantingGrid = () => {
  const [selectedWeek, setSelectedWeek] = useState(1);
  
  const weeks = [
    {
      week: 1,
      title: "Foundation Planting",
      date: "September 1-7, 2025",
      description: "Site preparation, canopy trees, and root layer foundation",
      color: "#10B981"
    },
    {
      week: 2,
      title: "Midstory Small Trees",
      date: "September 8-14",
      description: "Establishing structural plants before understory competition",
      color: "#3B82F6"
    },
    {
      week: 3,
      title: "Nitrogen Fixers & Support Shrubs",
      date: "September 15-21",
      description: "Plants that will support the entire system",
      color: "#8B5CF6"
    },
    {
      week: 4,
      title: "Beauty & Medicinal Shrubs",
      date: "September 22-28",
      description: "Adding plants for beauty ingredients and ecosystem services",
      color: "#EC4899"
    },
    {
      week: 5,
      title: "Herbaceous Foundation",
      date: "September 29 - October 5",
      description: "Establishing perennial herbs and medicinal plants",
      color: "#F59E0B"
    },
    {
      week: 6,
      title: "Aromatic Herbs & Pest Management",
      date: "October 6-12",
      description: "Natural pest control and aromatherapy ingredients",
      color: "#EF4444"
    },
    {
      week: 7,
      title: "Aromatic Ground Cover",
      date: "October 13-19",
      description: "Completing the aromatic herb layer",
      color: "#06B6D4"
    },
    {
      week: 8,
      title: "Vines & Final Integration",
      date: "October 20-26",
      description: "Adding vertical growing elements and completing the system",
      color: "#84CC16"
    }
  ];

  // Grid data with week assignments
  const gridData = [
    // Row 1 (South - top)
    [
      {plant: "1x Guava", week: 2, light: "full-sun"},
      {plant: "1x Ivy Gourd", week: 8, light: "partial"},
      {plant: "1x Wild Mint", week: 7, light: "shade"},
      {plant: "1x Mulberry", week: 2, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ],
    // Row 2
    [
      {plant: "1x Wild Mint", week: 7, light: "shade"},
      {plant: "1x Wild Mint", week: 7, light: "shade"},
      {plant: "1x Fig", week: 1, light: "full-sun"},
      {plant: "1x Maidenhair", week: 7, light: "shade"},
      {plant: "1x Indigo", week: 3, light: "full-sun"},
      {plant: "1x Sweet Potato", week: 1, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ],
    // Row 3
    [
      {plant: "1x Raspberry", week: 3, light: "full-sun"},
      {plant: "Oyster Mushrooms", week: 8, light: "shade"},
      {plant: "1x Giloy", week: 5, light: "partial"},
      {plant: "1x Maidenhair", week: 7, light: "shade"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Sweet Potato", week: 1, light: "full-sun"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 4
    [
      {plant: "1x Indian Strawberry", week: 6, light: "partial"},
      {plant: "1x Sweet Violet", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Rose", week: 4, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Sweet Potato", week: 1, light: "full-sun"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 5
    [
      {plant: "1x Sweet Potato", week: 1, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Catnip", week: 6, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Strawberry", week: 5, light: "partial"},
      {plant: "1x Guava", week: 2, light: "full-sun"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 6
    [
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Rose", week: 4, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Indian Strawberry", week: 6, light: "partial"},
      {plant: "1x Giloy", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 7
    [
      {plant: "", week: 0, light: ""},
      {plant: "1x Turmeric", week: 1, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Indigo", week: 3, light: "full-sun"},
      {plant: "1x Ginger", week: 1, light: "partial"},
      {plant: "1x Sweet Violet", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 8
    [
      {plant: "", week: 0, light: ""},
      {plant: "1x Ginger", week: 1, light: "partial"},
      {plant: "1x Mulberry", week: 2, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Indian Strawberry", week: 6, light: "partial"},
      {plant: "1x Amla", week: 1, light: "full-sun"},
      {plant: "1x Climbing Giloy", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 9
    [
      {plant: "1x Indian Strawberry", week: 6, light: "partial"},
      {plant: "1x Sweet Violet", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Raspberry", week: 3, light: "full-sun"},
      {plant: "1x Catnip", week: 6, light: "partial"},
      {plant: "1x Wild Thyme", week: 7, light: "full-sun"},
      {plant: "1x Kilmora", week: 2, light: "partial"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 10
    [
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Kaphal", week: 2, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ],
    // Row 11
    [
      {plant: "1x Coleus", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Raspberry", week: 3, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Giloy", week: 5, light: "partial"},
      {plant: "1x Strawberry", week: 5, light: "partial"},
      {plant: "1x Coleus", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 12
    [
      {plant: "", week: 0, light: ""},
      {plant: "1x Indigo", week: 3, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "1x Turmeric", week: 1, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Sweet Violet", week: 5, light: "partial"},
      {plant: "", week: 0, light: ""}
    ],
    // Row 13
    [
      {plant: "1x Coleus", week: 5, light: "partial"},
      {plant: "Oyster Mushrooms", week: 8, light: "shade"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Coleus", week: 5, light: "partial"},
      {plant: "1x Turmeric", week: 1, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ],
    // Row 14 (North - bottom)
    [
      {plant: "1x Indian Strawberry", week: 6, light: "partial"},
      {plant: "1x Amla", week: 1, light: "full-sun"},
      {plant: "1x Wild Thyme", week: 7, light: "full-sun"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Maidenhair", week: 7, light: "shade"},
      {plant: "1x Ginger", week: 1, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ],
    // Row 15
    [
      {plant: "1x Kilmora", week: 2, light: "partial"},
      {plant: "1x Climbing Giloy", week: 5, light: "partial"},
      {plant: "1x Catnip", week: 6, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "1x Maidenhair", week: 7, light: "shade"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ],
    // Row 16
    [
      {plant: "", week: 0, light: ""},
      {plant: "1x Kaphal", week: 2, light: "partial"},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""},
      {plant: "", week: 0, light: ""}
    ]
  ];

  const getWeekColor = (week) => {
    const weekData = weeks.find(w => w.week === week);
    return weekData ? weekData.color : '#F3F4F6';
  };

  const getLightIcon = (light) => {
    switch(light) {
      case 'full-sun': return <Sun className="w-3 h-3 text-yellow-500" />;
      case 'partial': return <Cloud className="w-3 h-3 text-blue-400" />;
      case 'shade': return <TreePine className="w-3 h-3 text-green-600" />;
      default: return null;
    }
  };

  const getCurrentWeekPlants = () => {
    const plants = [];
    gridData.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        if (cell.week === selectedWeek && cell.plant) {
          plants.push({
            plant: cell.plant,
            position: `Row ${rowIndex + 1}, Col ${colIndex + 1}`,
            light: cell.light
          });
        }
      });
    });
    return plants;
  };

  const currentWeek = weeks.find(w => w.week === selectedWeek);
  const currentPlants = getCurrentWeekPlants();

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Interactive Miyawaki Planting Schedule</h1>
        <p className="text-gray-600">8m × 4m Forest Layout - Kodarna, Dehradun (0.5m squares)</p>
      </div>

      {/* Week Selector */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <button 
            onClick={() => setSelectedWeek(Math.max(1, selectedWeek - 1))}
            disabled={selectedWeek === 1}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous Week
          </button>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Week {selectedWeek}</h2>
            <p className="text-lg font-semibold" style={{color: currentWeek?.color}}>
              {currentWeek?.title}
            </p>
            <p className="text-sm text-gray-600 flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-1" />
              {currentWeek?.date}
            </p>
          </div>
          
          <button 
            onClick={() => setSelectedWeek(Math.min(8, selectedWeek + 1))}
            disabled={selectedWeek === 8}
            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors"
          >
            Next Week
            <ChevronRight className="w-4 h-4 ml-2" />
          </button>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700">{currentWeek?.description}</p>
        </div>
      </div>

      {/* Grid */}
      <div className="mb-8">
        <div className="mb-4 text-center">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Site Layout</h3>
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <span className="font-medium">SOUTH (Maximum Sun)</span>
          </div>
        </div>
        
        <div className="inline-block border-2 border-gray-300 rounded-lg overflow-hidden">
          <div className="grid grid-cols-8 gap-0">
            {gridData.map((row, rowIndex) => 
              row.map((cell, colIndex) => (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-16 h-16 border border-gray-200 flex flex-col items-center justify-center text-xs font-medium text-center p-1 transition-all duration-300 ${
                    cell.week === selectedWeek ? 'ring-4 ring-blue-400 ring-opacity-50 scale-105' : ''
                  } ${cell.week > 0 ? 'cursor-pointer hover:scale-105' : ''}`}
                  style={{
                    backgroundColor: cell.week > 0 ? 
                      (cell.week === selectedWeek ? getWeekColor(cell.week) + '40' : getWeekColor(cell.week) + '20') : 
                      '#F9FAFB'
                  }}
                  title={cell.plant ? `${cell.plant} - Week ${cell.week}` : 'Empty'}
                >
                  {cell.plant && (
                    <>
                      <div className="flex items-center justify-center mb-1">
                        {getLightIcon(cell.light)}
                      </div>
                      <span className="text-xs leading-tight">{cell.plant.replace('1x ', '')}</span>
                      {cell.week === selectedWeek && (
                        <div className="absolute -top-1 -right-1 bg-blue-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs font-bold">
                          {cell.week}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <div className="flex justify-center space-x-8 text-sm text-gray-600">
            <span className="font-medium">NORTH (Less Sun)</span>
          </div>
          <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
            <span className="font-medium">EAST</span>
            <span className="font-medium">WEST</span>
          </div>
        </div>
      </div>

      {/* Current Week Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <MapPin className="w-5 h-5 mr-2" style={{color: currentWeek?.color}} />
            Week {selectedWeek} Planting List
          </h3>
          
          {currentPlants.length > 0 ? (
            <div className="space-y-3">
              {currentPlants.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <span className="font-medium text-gray-800">{item.plant}</span>
                    <span className="text-sm text-gray-500 block">{item.position}</span>
                  </div>
                  <div className="flex items-center">
                    {getLightIcon(item.light)}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No plants scheduled for this week in the grid.</p>
          )}
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Week {selectedWeek} Care Instructions</h3>
          
          <div className="space-y-4">
            {selectedWeek === 1 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Site Preparation (Days 1-2)</p>
                <p className="font-medium text-gray-700">• Plant Canopy Trees (Days 3-4)</p>
                <p className="font-medium text-gray-700">• Plant Root Layer Foundation (Days 5-7)</p>
                <p className="text-sm text-gray-600">Focus: Deep watering and heavy mulching around all plantings</p>
              </div>
            )}
            {selectedWeek === 2 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Midstory Small Trees (Days 1-6)</p>
                <p className="font-medium text-gray-700">• Install tree guards if needed</p>
                <p className="text-sm text-gray-600">Focus: Proper spacing to prevent overcrowding</p>
              </div>
            )}
            {selectedWeek === 3 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Native Nitrogen Fixers (Days 1-3)</p>
                <p className="font-medium text-gray-700">• Plant Berry Production Shrubs (Days 4-6)</p>
                <p className="font-medium text-gray-700">• Set up water management systems (Day 7)</p>
                <p className="text-sm text-gray-600">Focus: Position nitrogen fixers 6-8 feet from trees</p>
              </div>
            )}
            {selectedWeek === 4 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Aromatic Shrubs (Days 1-3)</p>
                <p className="font-medium text-gray-700">• Prepare areas for herbaceous layer (Days 4-6)</p>
                <p className="text-sm text-gray-600">Focus: Good air circulation for roses</p>
              </div>
            )}
            {selectedWeek === 5 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Climbing/Vertical Plants (Days 1-2)</p>
                <p className="font-medium text-gray-700">• Plant Perennial Vegetables (Days 3-4)</p>
                <p className="font-medium text-gray-700">• Start Groundcover (Days 5-7)</p>
                <p className="text-sm text-gray-600">Focus: Install basic support structures for climbers</p>
              </div>
            )}
            {selectedWeek === 6 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Pest Deterrent Herbs (Days 1-3)</p>
                <p className="font-medium text-gray-700">• Plant Dense Ground Cover (Days 4-6)</p>
                <p className="text-sm text-gray-600">Focus: Strategic placement around vulnerable plants</p>
              </div>
            )}
            {selectedWeek === 7 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Culinary Herbs (Days 1-3)</p>
                <p className="font-medium text-gray-700">• Plant Fern Layer (Days 4-6)</p>
                <p className="text-sm text-gray-600">Focus: Monitor establishment stress, adjust care routines</p>
              </div>
            )}
            {selectedWeek === 8 && (
              <div className="space-y-2">
                <p className="font-medium text-gray-700">• Plant Food Vines (Days 1-3)</p>
                <p className="font-medium text-gray-700">• Mushroom Inoculation (Days 4-5)</p>
                <p className="font-medium text-gray-700">• Final Assessment & Setup (Days 6-7)</p>
                <p className="text-sm text-gray-600">Focus: Create maintenance schedule and install plant markers</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-lg font-bold text-gray-800 mb-4">Legend</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Light Requirements</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <Sun className="w-4 h-4 text-yellow-500 mr-2" />
                <span>Full Sun (6+ hours)</span>
              </div>
              <div className="flex items-center">
                <Cloud className="w-4 h-4 text-blue-400 mr-2" />
                <span>Partial Sun (4-6 hours)</span>
              </div>
              <div className="flex items-center">
                <TreePine className="w-4 h-4 text-green-600 mr-2" />
                <span>Shade Tolerant (2-4 hours)</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Week Timeline</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{backgroundColor: weeks[0].color}}></div>
                <span>Week 1-2: Foundation & Structure</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{backgroundColor: weeks[2].color}}></div>
                <span>Week 3-4: Support Systems</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 rounded mr-2" style={{backgroundColor: weeks[4].color}}></div>
                <span>Week 5-8: Understory & Completion</span>
              </div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-700 mb-2">Grid Information</h4>
            <div className="space-y-1 text-sm">
              <p>• Each square = 0.5m × 0.5m</p>
              <p>• Total area = 8m × 4m (32 sq m)</p>
              <p>• Click through weeks to see planting schedule</p>
              <p>• Highlighted squares show current week's plants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePlantingGrid;
