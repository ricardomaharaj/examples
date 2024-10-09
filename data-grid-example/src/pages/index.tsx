import {
  Autocomplete,
  Avatar,
  LinearProgress,
  Slider,
  TextField,
} from "@mui/material"
import { DataGrid, GridColDef } from "@mui/x-data-grid"
import { useState } from "react"
import useSWR from "swr"
import { defaultTeams, Team, User, UserStatus, userStatuses } from "~/types"
import { isNumberBetween } from "~/util/number-between"

const cols: GridColDef<User>[] = [
  {
    field: "name",
    headerName: "Name",
    width: 200,
    renderCell: ({ row }) => (
      <div className="flex flex-row items-center">
        <Avatar src={row.image} />
        <div className="ml-2">{row.name}</div>
      </div>
    ),
  },
  {
    field: "status",
    headerName: "Status",
    width: 200,
  },
  {
    field: "team",
    headerName: "Team",
    width: 200,
    valueGetter: (_, row) => row.team?.name,
  },
  {
    field: "pendingTasks",
    headerName: "# Pending Tasks",
    width: 200,
  },
]

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Home() {
  const res = useSWR<Team[]>("/api", fetcher)
  const teams = res.data

  const [selectedTeams, setSelectedTeams] = useState(defaultTeams)
  const [selectedStatuses, setSelectedStatuses] = useState(userStatuses)
  const [selectedTaskRange, setSelectedTaskRange] = useState([0, 10])

  const users: User[] = (function () {
    let usersToReturn: User[] = []

    teams?.forEach((team) => {
      selectedTeams.forEach((selectedTeam) => {
        if (team.name === selectedTeam) {
          // add the team to the user object
          // more efficient than asking for the team on every user
          const membersWithTeam = team.members.map((member) => ({
            ...member,
            team,
          }))

          usersToReturn.push(...membersWithTeam)
        }
      })
    })

    usersToReturn = usersToReturn.filter((user) => {
      if (selectedStatuses.includes(user.status)) return true
      return false
    })

    usersToReturn = usersToReturn.filter((user) => {
      if (isNumberBetween(user.pendingTasks, selectedTaskRange)) return true
      return false
    })

    return usersToReturn
  })()

  if (res.isLoading) return <LinearProgress />

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 max-w-[50%]">
        <div className="flex flex-col gap-2 max-w-[50%] ml-2">
          <div># Pending Tasks Range</div>
          <Slider
            min={0}
            max={10}
            valueLabelDisplay="auto"
            value={selectedTaskRange}
            onChange={(e, val) => setSelectedTaskRange(val as number[])}
          />
        </div>
        <Autocomplete
          multiple
          filterSelectedOptions
          options={defaultTeams}
          defaultValue={defaultTeams}
          renderInput={(props) => <TextField label="Committees" {...props} />}
          onChange={(e, val) => setSelectedTeams(val)}
        />
        <Autocomplete
          multiple
          filterSelectedOptions
          options={userStatuses}
          defaultValue={userStatuses}
          renderInput={(props) => <TextField label="Statuses" {...props} />}
          onChange={(e, val) => setSelectedStatuses(val)}
        />
      </div>
      <DataGrid
        columns={cols}
        rows={users}
        disableColumnFilter
        disableColumnMenu
        initialState={{ pagination: { paginationModel: { pageSize: 50 } } }}
      />
    </div>
  )
}
