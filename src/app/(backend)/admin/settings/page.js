"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DotsVerticalIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import LoadingIndicator from "@/components/ui/loading-indicator";
import SettingsFormCreate from "./form-create";
import SettingsFormEdit from "./form-edit";
import { deleteSetting, getSettings } from "@/actions/settingActions";

export default function SettingsIndex() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState();
  const [settings, setSettings] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    setSelectedSetting();
    const data = await getSettings();
    setSettings(data.settings);
    setIsLoading(false);
  };

  const onDelete = async (id) => {
    setIsLoading(true);
    await deleteSetting(id);
    getData();
    setIsLoading(false);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="sticky top-0 z-10 flex h-[53px] items-center gap-1 border-b bg-background px-4">
        <h1 className="text-xl font-semibold">Settings</h1>
        <div className="ml-auto gap-1.5 text-sm">
          <SettingsFormCreate
            open={isOpen}
            onClose={() => {
              setIsOpen(false);
            }}
            onSuccess={() => {
              getData();
            }}
          />
          <SettingsFormEdit
            setting={selectedSetting ? selectedSetting : {}}
            open={selectedSetting ? true : false}
            onClose={() => {
              setSelectedSetting();
            }}
            onSuccess={() => {
              getData();
            }}
          />
        </div>
      </div>
      <main className="flex p-4">
        {isLoading ? (
          <div className="w-full flex justify-center items-center py-12">
            <LoadingIndicator />
          </div>
        ) : (
          <div className="flex w-full border-stone-200 border rounded-lg overflow-hidden">
            <Table className="overflow-x-scroll">
              <TableHeader>
                <TableRow className="bg-white">
                  <TableHead className="px-4">#</TableHead>
                  <TableHead className="px-4">Name</TableHead>
                  <TableHead className="px-4">Value</TableHead>
                  <TableHead className="text-right px-4">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {settings &&
                  settings.map((setting, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell className="px-4">
                          {setting.id.toString()}
                        </TableCell>
                        <TableCell className="px-4">{setting.name}</TableCell>
                        <TableCell className="px-4">{setting.value}</TableCell>
                        <TableCell className="text-right px-4">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div className="text-right flex justify-end">
                                <DotsVerticalIcon className="h-4 w-4" />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedSetting(setting);
                                }}
                              >
                                View
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => {
                                  setSelectedSetting(setting);
                                }}
                              >
                                Edit
                              </DropdownMenuItem>
                              <DropdownMenuItem className="text-destructive">
                                <button
                                  onClick={() => {
                                    if (
                                      confirm(
                                        "Are you sure you want to delete this setting?"
                                      )
                                    ) {
                                      onDelete(setting.id.toString());
                                    }
                                  }}
                                >
                                  Delete
                                </button>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </div>
        )}
      </main>
    </div>
  );
}
